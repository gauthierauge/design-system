# Changelog

All notable releases of the design system are documented here.

Format inspired by [Keep a Changelog](https://keepachangelog.com/).

## [0.1.0] - 2026-03-30

### Added

- **Tailwind preset** (`@gauthierauge/tailwind-preset`)
  - Tailwind v4 CSS theme with oklch tokens (light + dark)
  - Tailwind v3 JS preset with HSL compat
  - Semantic colors: primary, secondary, accent, muted, destructive, **success**, **warning**
  - Sidebar tokens, chart tokens (5 colors)
  - Typography: Inter (sans), IBM Plex Mono (mono)
  - Radius convention: shadcn `calc(var(--radius) - Xpx)`

- **shadcn custom registry**
  - `button` — success, warning variants + xs/icon sizes
  - `card` — standard card with header/content/footer
  - `input` — standard input
  - `page-layout` — header + sidebar + main content area

- **CI/CD**
  - `publish-preset.yml` — publishes preset to GitHub Packages on push
  - `deploy-registry.yml` — builds and deploys registry to GitHub Pages on push
