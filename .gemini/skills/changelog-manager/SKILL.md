---
name: changelog-manager
description: Maintenance of a CHANGELOG.md file in the project root. Use this skill to initialize or update the changelog based on git commit history, grouping changes by date and using a clean, bulleted format.
---

# Changelog Manager

This skill ensures the project has a clear, date-based history of changes in `CHANGELOG.md`.

## Workflow

### 1. Check for Existing Changelog
First, check if `CHANGELOG.md` exists in the project root.

### 2. Extract Git History
If the file is missing or needs a catch-up, extract commits since the last entry or all time.
```powershell
git log --date=short --pretty=format:"%ad: %s"
```

### 3. Format and Update
Group the extracted commits by date under `## [YYYY-MM-DD]` headings.
- Use a single `CHANGELOG.md` file in the project root.
- The latest date must be at the top.
- Each commit becomes a bullet point.
- If multiple commits exist for a single date, list them under that date's heading.

### 4. Manual Invocation
Only update the changelog when explicitly requested by the user or as a final step before a requested merge/completion.

## Formatting Template

```markdown
# Changelog

## [2026-04-16]
- Added responsive design to layout components
- Installed Vitest and configured test scripts
- Initialized Hono application with JSX support

## [2026-04-15]
- Initial project setup
```
