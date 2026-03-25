import type { PluginThemeRegistration } from '../types';

/**
 * Liquid Glass Theme
 *
 * Distinct frosted glass aesthetic built on teal-cyan hues with strong
 * surface layering and refractive chromatic borders. Designed to feel
 * like peering through layered panes of tinted glass.
 *
 * Colors use OKLCH format: oklch(lightness chroma hue)
 *   - lightness: 0 (black) -> 1 (white)
 *   - chroma:    0 (gray)  -> ~0.4 (vivid)
 *   - hue:       0-360 degrees (0=red, 90=yellow, 145=green, 270=blue)
 */
export const themeDef: PluginThemeRegistration = {
  id: 'liquid-glass',
  label: 'Liquid Glass',
  description:
    'A frosted glass theme with translucent surfaces and luminous refractive accents',

  dark: {
    colors: {
      // -- Surfaces --
      // Deep teal-black — like looking through dark smoked glass
      background: 'oklch(0.11 0.025 210)',
      foreground: 'oklch(0.93 0.012 195)',

      // Cards: frosted glass panels — noticeably lighter with a cool cyan tint
      card: 'oklch(0.18 0.03 205)',
      'card-foreground': 'oklch(0.93 0.012 195)',

      // Popovers: brightest glass layer, feels like it's floating closest to you
      popover: 'oklch(0.22 0.032 205)',
      'popover-foreground': 'oklch(0.93 0.012 195)',

      // -- Actions --
      // Primary: vivid aqua-cyan — light refracting through a glass prism
      primary: 'oklch(0.78 0.155 195)',
      'primary-foreground': 'oklch(0.08 0.03 210)',

      // Secondary: tinted glass shelf
      secondary: 'oklch(0.2 0.025 210)',
      'secondary-foreground': 'oklch(0.82 0.02 200)',

      // -- Subdued --
      muted: 'oklch(0.17 0.02 210)',
      'muted-foreground': 'oklch(0.52 0.02 205)',

      // Accent: cool violet-blue glow — like neon behind frosted glass
      accent: 'oklch(0.26 0.06 265)',
      'accent-foreground': 'oklch(0.92 0.015 240)',

      // -- Danger --
      destructive: 'oklch(0.6 0.22 18)',
      'destructive-foreground': 'oklch(0.97 0 0)',

      // -- Structural --
      // Borders: chromatic teal edges — the visible seam where glass panes meet
      border: 'oklch(0.32 0.04 200)',
      input: 'oklch(0.28 0.035 205)',
      ring: 'oklch(0.78 0.155 195)',

      // -- Semantic --
      success: 'oklch(0.72 0.17 155)',
      warning: 'oklch(0.78 0.15 80)',
      info: 'oklch(0.7 0.14 230)',
    },
    // Design tokens — frosted glass surfaces with translucent overlays
    tokens: {
      'surface-blur': '12px',           // Frosted glass backdrop blur
      'surface-saturation': '1.2',      // Boosted saturation through glass
      'popover-blur': '20px',           // Heavy frosted popovers
      'overlay-opacity': '0.6',         // Lighter overlays — show glass beneath
      'overlay-blur': '12px',           // Strong backdrop blur on dialogs
      'overlay-opacity-heavy': '0.75',  // Still lighter than default
      'widget-shadow': '0 4px 24px -4px oklch(0.15 0.06 200 / 0.5), 0 1px 4px oklch(0 0 0 / 0.3)',
      'widget-shadow-hover': '0 8px 40px -6px oklch(0.12 0.06 200 / 0.6), 0 2px 8px oklch(0 0 0 / 0.3)',
      'dialog-shadow': '0 24px 60px -8px oklch(0.1 0.06 200 / 0.6), 0 4px 12px oklch(0 0 0 / 0.3)',
    },
    shadows: {
      // Teal-tinted glass glow beneath panels
      card: '0 4px 30px -4px oklch(0.15 0.06 200 / 0.5), 0 1px 4px oklch(0 0 0 / 0.35), inset 0 1px 0 oklch(0.35 0.04 200 / 0.15)',
      popover:
        '0 10px 40px -6px oklch(0.12 0.06 200 / 0.6), 0 2px 8px oklch(0 0 0 / 0.35), inset 0 1px 0 oklch(0.4 0.04 200 / 0.12)',
    },
  },

  light: {
    colors: {
      // -- Surfaces --
      // Cool frosted ice — stronger teal tint so the background itself feels like glass
      background: 'oklch(0.94 0.025 200)',
      foreground: 'oklch(0.15 0.035 210)',

      // Cards: bright translucent panes — high lightness with noticeable cyan cast
      card: 'oklch(0.975 0.018 195)',
      'card-foreground': 'oklch(0.15 0.035 210)',

      // Popovers: the brightest glass layer — almost white but still tinted
      popover: 'oklch(0.98 0.015 195)',
      'popover-foreground': 'oklch(0.15 0.035 210)',

      // -- Actions --
      // Primary: saturated teal — punchy and unmistakably glassy
      primary: 'oklch(0.58 0.17 195)',
      'primary-foreground': 'oklch(0.98 0 0)',

      // Secondary: frosted teal shelf — clearly tinted, not just gray
      secondary: 'oklch(0.91 0.03 200)',
      'secondary-foreground': 'oklch(0.25 0.04 210)',

      // -- Subdued --
      muted: 'oklch(0.91 0.022 200)',
      'muted-foreground': 'oklch(0.42 0.03 210)',

      // Accent: cool violet-glass highlight — chromatic pop against the teal base
      accent: 'oklch(0.88 0.055 265)',
      'accent-foreground': 'oklch(0.2 0.05 260)',

      // -- Danger --
      destructive: 'oklch(0.55 0.22 18)',
      'destructive-foreground': 'oklch(0.98 0 0)',

      // -- Structural --
      // Borders: strong teal glass edges — clearly visible refractive seams
      border: 'oklch(0.82 0.04 200)',
      input: 'oklch(0.82 0.04 200)',
      ring: 'oklch(0.58 0.17 195)',

      // -- Semantic --
      success: 'oklch(0.55 0.17 155)',
      warning: 'oklch(0.62 0.16 75)',
      info: 'oklch(0.55 0.15 230)',
    },
    // Light mode — daylight through frosted glass
    tokens: {
      'surface-blur': '12px',
      'surface-saturation': '1.15',
      'popover-blur': '16px',
      'overlay-opacity': '0.5',
      'overlay-blur': '10px',
      'overlay-opacity-heavy': '0.65',
      'widget-shadow': '0 3px 24px -3px oklch(0.55 0.06 200 / 0.22), 0 1px 5px oklch(0 0 0 / 0.08)',
      'widget-shadow-hover': '0 8px 40px -6px oklch(0.45 0.06 200 / 0.3), 0 2px 8px oklch(0 0 0 / 0.1)',
      'dialog-shadow': '0 24px 60px -8px oklch(0.4 0.06 200 / 0.3), 0 4px 12px oklch(0 0 0 / 0.08)',
    },
    shadows: {
      // Prominent teal-tinted glass glow — frosted panels catching daylight
      card: '0 3px 24px -3px oklch(0.55 0.06 200 / 0.22), 0 1px 5px oklch(0 0 0 / 0.08), inset 0 1px 0 oklch(1 0.01 195 / 0.6)',
      popover:
        '0 10px 40px -6px oklch(0.45 0.06 200 / 0.28), 0 2px 8px oklch(0 0 0 / 0.1), inset 0 1px 0 oklch(1 0.01 195 / 0.6)',
    },
  },
};
