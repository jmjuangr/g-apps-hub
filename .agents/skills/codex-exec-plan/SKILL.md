---
name: codex-exec-plan
description: "Planning workflow for multi-step changes: create an ExecPlan, validate assumptions, then implement. Trigger: when the task is larger than a small change."
license: Apache-2.0
metadata:
author: jose
version: "1.0"
scope: [root]
auto_invoke: "Create/update an execution plan"
allowed-tools: Read, Edit, Write, Glob, Grep, Bash, WebFetch, WebSearch, Task
---


## ExecPlan workflow


### When to create an ExecPlan
Create a plan if ANY is true:
- New feature spanning multiple files
- DB schema changes
- Auth/permissions changes
- Refactor touching routing/data fetching


### ExecPlan format (docs/plans/XXXX.md)
Use this exact structure:
1) Goal
2) Scope
3) Out of scope
4) Assumptions & risks
5) Step-by-step changes (files & key edits)
6) Validation steps (commands + manual checks)
7) Rollback plan


### Rules
- Keep the plan short and executable.
- Prefer incremental steps that can be validated.
- If assumptions exist, state them explicitly.