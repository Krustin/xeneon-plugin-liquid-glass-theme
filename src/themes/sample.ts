import type { PluginThemeRegistration } from '../types';

/**
 * Sample Theme — Theme Definition
 *
 * Colors use OKLCH format: oklch(lightness chroma hue)
 *   - lightness: 0 (black) -> 1 (white)
 *   - chroma:    0 (gray)  -> ~0.4 (vivid)
 *   - hue:       0-360 degrees (0=red, 90=yellow, 145=green, 270=blue)
 *
 * Each token has a role:
 *   background / foreground      — page background & default text
 *   card / card-foreground       — card surfaces & text
 *   popover / popover-foreground — dropdown/popover surfaces & text
 *   primary / primary-foreground — primary actions & their label text
 *   secondary / secondary-fg     — secondary UI surfaces & text
 *   muted / muted-foreground     — subdued backgrounds & dimmed text
 *   accent / accent-foreground   — highlighted areas & text on them
 *   destructive / destructive-fg — danger actions & their label text
 *   border                       — dividers and outlines
 *   input                        — form input borders
 *   ring                         — focus ring color
 *   success / warning / info     — semantic status colors
 */
export const themeDef: PluginThemeRegistration = {
  id: 'theme',
  label: 'My Theme',
  description: 'A theme plugin template for Xeneon Touch UI',

  dark: {
    colors: {
      background: 'oklch(0.15 0.01 270)',
      foreground: 'oklch(0.93 0.005 270)',
      card: 'oklch(0.2 0.01 270)',
      'card-foreground': 'oklch(0.93 0.005 270)',
      popover: 'oklch(0.2 0.01 270)',
      'popover-foreground': 'oklch(0.93 0.005 270)',
      primary: 'oklch(0.6 0.2 270)',
      'primary-foreground': 'oklch(0.98 0 0)',
      secondary: 'oklch(0.22 0.01 270)',
      'secondary-foreground': 'oklch(0.85 0.01 270)',
      muted: 'oklch(0.22 0.01 270)',
      'muted-foreground': 'oklch(0.55 0.01 270)',
      accent: 'oklch(0.25 0.02 270)',
      'accent-foreground': 'oklch(0.93 0.005 270)',
      destructive: 'oklch(0.55 0.2 25)',
      'destructive-foreground': 'oklch(0.98 0 0)',
      border: 'oklch(0.25 0.01 270)',
      input: 'oklch(0.25 0.01 270)',
      ring: 'oklch(0.6 0.2 270)',
      success: 'oklch(0.6 0.18 145)',
      warning: 'oklch(0.7 0.17 75)',
      info: 'oklch(0.55 0.18 255)',
    },
  },

  light: {
    colors: {
      background: 'oklch(0.98 0.005 270)',
      foreground: 'oklch(0.15 0.02 270)',
      card: 'oklch(1 0 0)',
      'card-foreground': 'oklch(0.15 0.02 270)',
      popover: 'oklch(1 0 0)',
      'popover-foreground': 'oklch(0.15 0.02 270)',
      primary: 'oklch(0.45 0.2 270)',
      'primary-foreground': 'oklch(0.98 0 0)',
      secondary: 'oklch(0.95 0.005 270)',
      'secondary-foreground': 'oklch(0.3 0.02 270)',
      muted: 'oklch(0.95 0.005 270)',
      'muted-foreground': 'oklch(0.5 0.02 270)',
      accent: 'oklch(0.93 0.01 270)',
      'accent-foreground': 'oklch(0.2 0.02 270)',
      destructive: 'oklch(0.5 0.2 25)',
      'destructive-foreground': 'oklch(0.98 0 0)',
      border: 'oklch(0.9 0.005 270)',
      input: 'oklch(0.9 0.005 270)',
      ring: 'oklch(0.45 0.2 270)',
      success: 'oklch(0.5 0.18 145)',
      warning: 'oklch(0.6 0.17 75)',
      info: 'oklch(0.5 0.18 255)',
    },
  },
};
