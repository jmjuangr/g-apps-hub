---
name: tailwind-shadcn
description: "Tailwind + shadcn/ui conventions: cn() utility, component composition, accessibility, and avoiding fragile styling. Trigger: when working on UI components or Tailwind classes."
license: Apache-2.0
metadata:
author: jose
version: "1.0"
scope: [web, ui]
auto_invoke: "Working with Tailwind or shadcn/ui"
allowed-tools: Read, Edit, Write, Glob, Grep, Bash
---


## Rules
- Prefer shadcn/ui primitives and extend them.
- Use `cn()` for class merging.
- Keep component props stable.


## Accessibility
- Use proper labels for inputs.
- Buttons/links must have accessible names.


## Review checklist
- [ ] Styling consistent
- [ ] No duplicated UI patterns
- [ ] Accessible controls