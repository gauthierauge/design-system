# shadcn Rules

Each response involving shadcn components or the registry will start with:
"J'ai lu les règles : shadcn.md"

## Reference

Before creating, modifying, or debugging any shadcn component:
1. Read `.agents/skills/shadcn/SKILL.md` for CLI commands and workflow
2. Read the relevant rules in `.agents/skills/shadcn/rules/`:
   - `styling.md` — className, semantic colors, spacing, dark mode
   - `composition.md` — component structure, groups, overlays
   - `forms.md` — FieldGroup, Field, validation
   - `icons.md` — data-icon, sizing
   - `base-vs-radix.md` — asChild vs render

## Key rules for this project

- Use `npx shadcn@latest docs <component>` before modifying a component
- Use `npx shadcn@latest search` before writing custom UI
- Semantic colors only (`bg-primary`, `text-muted-foreground`), never raw values
- `gap-*` not `space-y-*`
- `size-*` when width = height
- Use `cn()` for conditional classes
- After `shadcn build`, verify the JSON output in `public/r/`

## Registry workflow

1. Modify components in `registry/new-york/blocks/`
2. Run `npx shadcn build` to regenerate `public/r/`
3. Verify the generated JSON is correct
