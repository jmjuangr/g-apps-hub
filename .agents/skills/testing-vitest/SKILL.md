---
name: testing-vitest
description: "Vitest testing patterns: unit tests for utilities and services, integration tests for server actions (where possible), and deterministic fixtures. Trigger: when adding or updating tests."
license: Apache-2.0
metadata:
author: jose
version: "1.0"
scope: [web, shared]
auto_invoke: "Writing unit/integration tests"
allowed-tools: Read, Edit, Write, Glob, Grep, Bash
---


## Rules
- Prefer deterministic tests.
- Use fixtures for repeated setup.
- Test the domain logic (services) more than UI.


## Review checklist
- [ ] Tests cover success + failure
- [ ] No flaky time-based assertions