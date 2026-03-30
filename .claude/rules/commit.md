# Commit & Push Rules

Each response involving a commit or push will start with:
"J'ai lu les règles : commit.md"

## Rule 1: Never push without explicit permission

```
NEVER push. NEVER.
Wait for the user to say "push" or "pousse".
If in doubt: ask.
```

## Rule 2: Always ask before committing

Before any `git commit`:
1. Show the list of files that will be committed
2. Show the proposed commit message
3. Wait for explicit approval ("ok", "go", "commit")
4. Only then execute the commit

Never commit silently. Never commit "while we're at it".

## Rule 3: No Co-Authored-By

```
NEVER add Co-Authored-By in commit messages.
NEVER add any trailer that attributes authorship to the AI.
The user is the sole author of all commits.
```

## Rule 4: Conventional commits with scopes

### Format

```
type(scope): description in imperative mood (< 72 chars)
```

### Types

| Type | When |
|------|------|
| `feat` | New feature, new component, new token |
| `fix` | Bug fix |
| `refactor` | Code restructuring, no behavior change |
| `chore` | Tooling, CI, config, dependencies |
| `docs` | Documentation only |
| `test` | Tests only |

### Scopes

| Scope | When |
|-------|------|
| `preset` | Changes in `packages/tailwind-preset/` |
| `registry` | Changes in `registry/` or `registry.json` |
| `tokens` | Design token changes (colors, radius, typography) |
| `button` | Button component changes |
| `card` | Card component changes |
| `input` | Input component changes |
| `page-layout` | Page layout component changes |
| `ci` | GitHub Actions workflows |
| `deps` | Dependency updates |

### Examples

```
feat(preset): add success and warning color tokens
feat(button): add success and warning variants
fix(tokens): correct dark mode accent color
chore(ci): update deploy-registry workflow
chore(deps): upgrade tailwindcss to 4.3
refactor(registry): simplify page-layout structure
```

### Multi-scope changes

If a change spans multiple scopes, use the most relevant one.
If truly cross-cutting, omit the scope:

```
feat: initial design system scaffold
```

## Rule 5: One logical change per commit

- One commit = one purpose
- Don't mix token changes with component changes
- Don't mix CI changes with code changes

## Rule 6: Update changelogs on every commit

Two changelogs to maintain:

### `COMMITS.md` — updated on EVERY commit
- Add a row to the table with date, short hash, and commit message
- This is a raw log of all commits

### `CHANGELOG.md` — updated on RELEASES only
- When a feature, component, or version is complete (not every commit)
- Use [Keep a Changelog](https://keepachangelog.com/) format
- Sections: Added, Changed, Fixed, Removed
- Include a short explanation of what changed and why
- The user decides when something is a release

### Workflow
1. Every commit → update `COMMITS.md`
2. User says "release" or "nouvelle version" → update `CHANGELOG.md`
3. Both files are included in the commit they document

## Summary

```
COMMIT  → always ask first, show files + message
PUSH    → never, wait for explicit "push"/"pousse"
AUTHOR  → user only, no Co-Authored-By, no AI attribution
FORMAT  → type(scope): description
SCOPE   → match the area of change
```
