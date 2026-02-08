# Agent Rules & Logs Repository

Repozytorium do prowadzenia zasad pracy agentow oraz historii dzialan.

## Co jest w repo

- `AGENTS.md` - twarde zasady dla agentow.
- `tasks/todo.md` - aktywny plan pracy i status zadan.
- `tasks/lessons.md` - lekcje po korektach i bledach.
- `logs/activity.md` - dziennik sesji i zmian.

## Szybki workflow

1. Przed praca dopisz plan i kryteria sukcesu w `tasks/todo.md`.
2. Po kazdym kroku aktualizuj status checklisty.
3. Po zakonczeniu dopisz wynik testow/weryfikacji.
4. Jezeli byla korekta lub blad, dopisz wpis do `tasks/lessons.md`.
5. Dopisz wpis sesyjny do `logs/activity.md`.

## Start (lokalnie)

```powershell
git init
git add .
git commit -m "Initial commit: agent rules and logs"
```

## Publikacja na GitHub

Opcja z GitHub CLI (`gh`):

```powershell
gh repo create <NAZWA_REPO> --public --source=. --remote=origin --push
```

Opcja bez `gh`:

1. Utworz puste repo na GitHub.
2. Podepnij remote i wypchnij:

```powershell
git remote add origin https://github.com/<USER>/<NAZWA_REPO>.git
git branch -M main
git push -u origin main
```
