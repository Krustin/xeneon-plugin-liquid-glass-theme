import type { XeneonPlugin, PluginAPI } from './types';
import { themeDef } from './themes/sample';

/**
 * Liquid Glass Theme — frosted translucent surfaces with luminous refractive accents.
 *
 * Provides both dark and light palettes using OKLCH color format.
 * Select it in Settings > Appearance > Theme.
 */
export const plugin: XeneonPlugin = {
  async onload(api: PluginAPI) {
    api.registerTheme(themeDef);
    api.logger.info('Theme registered');
  },

  async onunload() {
    // Nothing to clean up — theme registration is
    // automatically disposed when the plugin unloads.
  },
};
