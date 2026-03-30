# design-system — CLAUDE.md

## Project Overview

Centralized design system distributing:
1. **Tailwind preset** (`@gauthierauge/tailwind-preset`) via GitHub Packages
2. **shadcn custom registry** via GitHub Pages

### Stack

| Layer | Technology |
|-------|------------|
| Build tool | Next.js (minimal, for `shadcn build` only) |
| Tokens | Tailwind CSS v4 (oklch) + v3 compat (HSL) |
| Components | React 19 + shadcn/ui (new-york) + CVA |
| CI/CD | GitHub Actions (Packages + Pages) |

## Structure

```
design-system/
├── packages/tailwind-preset/   # npm package (tokens)
├── registry/new-york/blocks/   # Custom shadcn components
├── components/ui/              # Base shadcn (for build)
├── public/r/                   # Built registry JSONs
├── app/                        # Minimal Next.js (build only)
└── .github/workflows/          # CI/CD
```

## Commands

```bash
npm run build:registry    # npx shadcn build → public/r/
npm run build             # next build
npm run dev               # next dev (for local testing)
```

## Rules

See `.claude/rules/` for detailed rules.

## Git

- Main branch: `develop`
- See `.claude/rules/commit.md` for commit rules
