---
name: git-commit
description: "Conventional commits and CMD examples. Trigger: before creating commits or PR titles."
license: Apache-2.0
metadata:
author: jose
version: "1.0"
scope: [root]
auto_invoke: "Creating a git commit"
allowed-tools: Read, Edit, Write, Bash
---


## Conventional commit
Format: `<type>(scope): <description>`
Types: feat, fix, docs, chore, refactor, test, perf, style


## CMD examples
```bat
REM feature
git add .
git commit -m "feat(web): add login page"


REM fix
git add .
git commit -m "fix(auth): handle expired session"
```
## Rules

Keep commits small.
Description in imperative mood.
Scope is optional but recommended in monorepos.