import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const failures = [];

function rel(...parts) {
  return path.join(root, ...parts);
}

function requireFile(filePath) {
  if (!existsSync(rel(filePath))) {
    failures.push(`Missing required file: ${filePath}`);
  }
}

function requireAbsent(filePath, reason) {
  if (existsSync(rel(filePath))) {
    failures.push(`Unexpected path: ${filePath}${reason ? ` (${reason})` : ""}`);
  }
}

function read(filePath) {
  return readFileSync(rel(filePath), "utf8");
}

[
  "README.md",
  "AGENTS.md",
  "PLANS.md",
  ".agents/skills/deep-researcher/SKILL.md",
  ".agents/skills/deep-researcher/agents/openai.yaml",
  "docs/skill-authoring.md"
].forEach(requireFile);

requireAbsent("agent-profile-template", "the separate starter folder was superseded by current-repo integration");
requireAbsent("sources", "the persistent source catalog was intentionally removed");
requireAbsent("skills", "active Codex skills belong under .agents/skills");

const agents = existsSync(rel("AGENTS.md")) ? read("AGENTS.md") : "";
for (const expected of ["user or agent changes", "npm run validate"]) {
  if (!agents.includes(expected)) {
    failures.push(`AGENTS.md should mention: ${expected}`);
  }
}

const skillsRoot = rel(".agents", "skills");
if (existsSync(skillsRoot)) {
  const skillDirs = readdirSync(skillsRoot)
    .map((entry) => path.join(skillsRoot, entry))
    .filter((entry) => statSync(entry).isDirectory() && entry !== rel("skills", "shared"));

  for (const skillDir of skillDirs) {
    const skillName = path.basename(skillDir);
    const skillFile = path.join(skillDir, "SKILL.md");
    if (!existsSync(skillFile)) {
      failures.push(`Missing SKILL.md for skill ${skillName}`);
      continue;
    }

    const skill = readFileSync(skillFile, "utf8");
    const frontmatter = skill.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!frontmatter) {
      failures.push(`Skill ${skillName} is missing YAML frontmatter`);
      continue;
    }

    if (!new RegExp(`^name:\\s*"?${skillName}"?\\s*$`, "m").test(frontmatter[1])) {
      failures.push(`Skill ${skillName} frontmatter name must match its folder`);
    }
    if (!/^description:\s*.+$/m.test(frontmatter[1])) {
      failures.push(`Skill ${skillName} is missing frontmatter description`);
    }

    if (!/^description:\s*.*\bUse (when|for)\b.+$/m.test(frontmatter[1])) {
      failures.push(`Skill ${skillName} description should include trigger guidance such as "Use when" or "Use for"`);
    }

    const openaiYaml = path.join(skillDir, "agents", "openai.yaml");
    if (!existsSync(openaiYaml)) {
      failures.push(`Skill ${skillName} is missing agents/openai.yaml`);
      continue;
    }

    const metadata = readFileSync(openaiYaml, "utf8");
    for (const field of ["display_name", "short_description", "default_prompt"]) {
      if (!new RegExp(`^${field}:\\s*\\S+`, "m").test(metadata)) {
        failures.push(`Skill ${skillName} openai.yaml is missing ${field}`);
      }
    }
  }
}

if (failures.length > 0) {
  console.error("Profile validation failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Profile validation passed.");
