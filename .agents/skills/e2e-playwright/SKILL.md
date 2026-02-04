---
name: e2e-playwright
description: "Playwright E2E testing patterns: Page Object Model, stable selectors, critical user journeys. Trigger: when writing E2E tests."
license: Apache-2.0
metadata:
author: jose
version: "1.0"
scope: [web]
auto_invoke: "Writing Playwright E2E tests"
allowed-tools: Read, Edit, Write, Glob, Grep, Bash, WebFetch, WebSearch
---


## File structure
- Keep one spec file per feature route.
- Use Page Object Model for reuse.


## Selector priority
1) getByRole
2) getByLabel
3) getByText (static)
4) getByTestId (last resort)


## Review checklist
- [ ] Stable selectors
- [ ] Critical path covered
- [ ] Avoid CSS selectors