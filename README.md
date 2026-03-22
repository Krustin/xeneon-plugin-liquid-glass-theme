# Xeneon Plugin Starter — Theme

A minimal theme plugin template for Xeneon Touch UI. Registers a single theme with dark and light color palettes.

## Quick Start

```bash
# Clone the template
git clone https://github.com/Krustin/xeneon-plugin-starter-theme.git my-theme-plugin
cd my-theme-plugin
rm -rf .git && git init

# Customize manifest.json — set your plugin ID, name, description
# Customize package.json — set your package name and author

# Build & install
npm install
npm run build
xeneon plugin install .
```

Or use the CLI: `xeneon plugin init my-theme-plugin --type theme`

## Project Structure

| File | Purpose |
|------|---------|
| `manifest.json` | Plugin metadata (id, name, version, keywords) |
| `package.json` | Node.js project config and build scripts |
| `tsconfig.json` | TypeScript compiler options |
| `src/index.ts` | Plugin entry point — registers the theme |
| `src/themes/sample.ts` | Theme definition (dark + light palettes) |
| `src/types.ts` | Xeneon Plugin SDK type definitions |

## How It Works

The plugin entry point registers a theme via `api.registerTheme()`:

```typescript
import { themeDef } from './themes/sample';

export const plugin: XeneonPlugin = {
  async onload(api: PluginAPI) {
    api.registerTheme(themeDef);
  },
  async onunload() {},
};
```

The theme definition provides color tokens for both dark and light modes. Users can select it in **Settings > Appearance > Theme**.

## OKLCH Color Format

All colors use OKLCH: `oklch(lightness chroma hue)`

| Parameter | Range | Description |
|-----------|-------|-------------|
| lightness | 0–1 | 0 = black, 1 = white |
| chroma | 0–~0.4 | 0 = gray, higher = more vivid |
| hue | 0–360 | 0 = red, 90 = yellow, 145 = green, 270 = blue |

### Color Tokens

| Token | Role |
|-------|------|
| `background` / `foreground` | Page background & default text |
| `card` / `card-foreground` | Card surfaces & text |
| `popover` / `popover-foreground` | Dropdown/popover surfaces & text |
| `primary` / `primary-foreground` | Primary actions & their label text |
| `secondary` / `secondary-foreground` | Secondary UI surfaces & text |
| `muted` / `muted-foreground` | Subdued backgrounds & dimmed text |
| `accent` / `accent-foreground` | Highlighted areas & text on them |
| `destructive` / `destructive-foreground` | Danger actions & their label text |
| `border` | Dividers and outlines |
| `input` | Form input borders |
| `ring` | Focus ring color |
| `success` / `warning` / `info` | Semantic status colors |

## Other Templates

| Template | Use Case |
|----------|----------|
| [xeneon-plugin-starter-theme](https://github.com/Krustin/xeneon-plugin-starter-theme) (this) | Theme only (simplest) |
| [xeneon-plugin-starter-widget](https://github.com/Krustin/xeneon-plugin-starter-widget) | Widget only |
| [xeneon-plugin-starter-action](https://github.com/Krustin/xeneon-plugin-starter-action) | Actions only |
| [xeneon-plugin-starter](https://github.com/Krustin/xeneon-plugin-starter) | Actions + widgets |
| [xeneon-plugin-starter-full](https://github.com/Krustin/xeneon-plugin-starter-full) | Actions + widgets + settings + renderer |
