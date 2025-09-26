# Syncing a Forked Repository with the Original Repository

This guide explains how to keep your own repository up to date with the original repository you cloned or forked, while preserving your own changes.

---

## 1. Check if you are inside a Git repository

Run:

```bash
git status
```

- If you see `On branch main` -> You're in a Git repo
- If you see `fatal: not a git repository` -> Navigate into the correct folder
- You can also confirm by listing hidden file: 

```bash
ls -a
```

- If you see a `.git/` folder, you're inside a Git repo

## 2. Check your remotes

Run:

```bash
git remote -v
```

Example output:

```perl
origin  https://github.com/your-username/your-repo.git (fetch)
origin  https://github.com/your-username/your-repo.git (push)
```

- origin: your own Github repository

## 3. Add the original repository as `upstream`

Use the original repo you cloned:

```bash
git remote add upstream https://github.com/original-author/original-repo.git
```

Confirm:

```bash
git remote -v
```

Expected output:

```perl
origin   https://github.com/your-username/your-repo.git (fetch)
origin   https://github.com/your-username/your-repo.git (push)
upstream https://github.com/original-author/original-repo.git (fetch)
upstream https://github.com/original-author/original-repo.git (push)
```

## 4. Fetch updates from the original repository

```bash
git fetch upstream
```
This downloads commits from the original repo but does not apply them yet.

## 5. Merge or rebase updates into your branch

Switch to your main branch

```bash
git checkout main
```
Merge:

```bash
git merge upstream/main
```
- Git may open an editor for the merge commit message
- Save and close, or use:

```bash
git merge upstream/main --no-edit
```

to skip the editor

## 6. Push updates to your repository

```bash
git push origin main
```

## 7. Repeat when needed

Whenever the original repo updates, run:

```bash
git fetch upstream
git checkout main
git merge upstream/main --no-edit
git push origin main
```








