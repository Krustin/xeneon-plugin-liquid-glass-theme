import type { XeneonPlugin, PluginAPI } from './types';
import { themeDef } from './themes/sample';

/**
 * Theme Plugin — registers a single custom theme.
 *
 * The theme provides both dark and light color palettes
 * using OKLCH color format. Users can select it in
 * Settings > Appearance > Theme.
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
