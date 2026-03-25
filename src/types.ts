/**
 * Xeneon Plugin SDK Types
 * Standalone type definitions for external plugins.
 * These mirror the types from the main Xeneon app.
 *
 * Source of truth: src/shared/types/plugin.ts + src/shared/types/actions.ts
 */

// ============ DISPOSABLE ============

/** Handle for cleaning up a registration */
export interface Disposable {
  dispose(): void;
}

// ============ PLATFORM & PERMISSIONS ============

/** Supported platforms */
export type Platform = 'win32' | 'darwin' | 'linux';

/** Permissions a plugin may declare */
export type PluginPermission = 'exec' | 'network' | 'storage' | 'ipc';

// ============ PLUGIN MANIFEST ============

/** Plugin manifest (manifest.json) */
export interface PluginManifest {
  /** Unique plugin identifier (reverse-domain style, e.g. "yourname.my-plugin") */
  id: string;
  /** Display name */
  name: string;
  /** Semver version */
  version: string;
  /** Description of what the plugin does */
  description: string;
  /** Plugin author */
  author: string;
  /** Minimum app version required */
  minAppVersion?: string;
  /** Supported platforms (undefined = all) */
  platforms?: Platform[];
  /** Entry point relative to plugin directory (e.g. "dist/index.js") */
  main: string;
  /** Source repository URL */
  repository?: string;
  /** Homepage or documentation URL */
  homepage?: string;
  /** Searchable keywords */
  keywords?: string[];
  /** SPDX license identifier */
  license?: string;
  /** Declared permissions */
  permissions?: PluginPermission[];
  /** Renderer entry point relative to plugin directory (e.g. "dist/renderer/index.js") */
  renderer?: string;
}

// ============ PLUGIN INTERFACE ============

/** Interface that all plugins must implement */
export interface XeneonPlugin {
  /** Called when the plugin is loaded. Register actions, widgets, settings here. */
  onload(api: PluginAPI): void | Promise<void>;
  /** Called when the plugin is unloaded. Clean up resources here. */
  onunload(): void | Promise<void>;
}

// ============ PLUGIN API ============

/** API provided to plugins during onload() */
export interface PluginAPI {
  /** Register a custom widget type */
  registerWidget(config: PluginWidgetRegistration): Disposable;
  /** Register an action */
  registerAction(action: PluginActionDefinition): Disposable;
  /** Register a settings tab */
  registerSettingsTab(tab: PluginSettingsTab): Disposable;
  /** Register a theme */
  registerTheme(theme: PluginThemeRegistration): Disposable;
  /** Per-plugin persistent key-value storage */
  storage: PluginStorage;
  /** Prefixed logger */
  logger: PluginLogger;
  /** Execute a shell command (requires "exec" permission) */
  exec(command: string): Promise<{ stdout: string; stderr: string }>;
  /** Limited IPC access to invoke existing channels */
  ipc: {
    invoke(channel: string, ...args: unknown[]): Promise<unknown>;
  };
}

// ============ ACTION PARAMETER ============

/** Parameter types for action configuration */
export type ParameterType =
  | 'string'
  | 'number'
  | 'boolean'
  | 'select'
  | 'color'
  | 'file'
  | 'folder'
  | 'hotkey';

/** Option for select-type parameters */
export interface SelectOption {
  value: string;
  label: string;
  icon?: string;
}

/** Parameter definition for an action */
export interface ActionParameter {
  /** Unique parameter identifier */
  id: string;
  /** Display name */
  name: string;
  /** Parameter type */
  type: ParameterType;
  /** Whether the parameter is required */
  required: boolean;
  /** Default value */
  default?: unknown;
  /** Options for "select" type */
  options?: SelectOption[];
  /** Minimum value for "number" type */
  min?: number;
  /** Maximum value for "number" type */
  max?: number;
  /** Step increment for "number" type */
  step?: number;
  /** Placeholder text for "string" type */
  placeholder?: string;
  /** Regex pattern for validation */
  pattern?: string;
}

// ============ ACTION REGISTRATION ============

/** Action definition provided by a plugin */
export interface PluginActionDefinition {
  /** Action ID (auto-prefixed with plugin ID, e.g. "my-action" -> "yourname.my-plugin.my-action") */
  id: string;
  /** Absolute action ID -- if set, used as-is without plugin ID prefix */
  absoluteId?: string;
  /** Display name */
  name: string;
  /** Category for grouping in command palette */
  category: string;
  /** Description of what the action does */
  description: string;
  /** Icon name from the icon set */
  icon?: string;
  /** Supported platforms */
  platforms?: Platform[];
  /** Configurable parameters */
  parameters?: ActionParameter[];
  /** Whether this action requires user confirmation before execution */
  dangerous?: boolean;
  /** Custom confirmation message (default auto-generated from name) */
  confirmationMessage?: string;
  /** Execute the action */
  execute: (params?: Record<string, unknown>) => Promise<void>;
}

// ============ WIDGET REGISTRATION ============

/**
 * Widget type registration provided by a plugin.
 *
 * Valid size presets:
 * - Tiny (1x1), Small (2x1), Square (2x2), Wide (4x1),
 *   Large (4x2), Banner (6x2), FullWidth (12x2)
 */
export interface PluginWidgetRegistration {
  /** Widget type identifier (auto-prefixed with plugin ID) */
  type: string;
  /** Absolute widget type -- if set, used as-is without plugin ID prefix */
  absoluteType?: string;
  /** Display name shown in widget wizard */
  name: string;
  /** Description shown in widget wizard */
  description: string;
  /** Icon name from the icon set */
  icon: string;
  /** Allowed widget sizes (e.g. ["Tiny", "Small", "Square"]) */
  allowedSizes: string[];
  /** Default size preset */
  defaultSize: string;
  /** Default widget config */
  defaultConfig: Record<string, unknown>;
  /** Default label for new widgets of this type */
  defaultLabel?: string;
  /** Default icon for new widgets of this type */
  defaultIcon?: string;
}

// ============ SETTINGS TAB REGISTRATION ============

/** Settings tab registration provided by a plugin */
export interface PluginSettingsTab {
  /** Tab identifier (auto-prefixed with plugin ID) */
  id: string;
  /** Tab label */
  label: string;
  /** Icon name from the icon set */
  icon: string;
}

// ============ THEME REGISTRATION ============

/** A single theme color set (dark or light) */
export interface ThemeColors {
  /** CSS color values keyed by token name (e.g., 'background', 'foreground') */
  colors: Record<string, string>;
  /** Optional shadow overrides */
  shadows?: Record<string, string>;
  /** Optional design token overrides (surface, overlay, widget chrome, etc.) */
  tokens?: Record<string, string>;
}

/** Theme registration provided by a plugin */
export interface PluginThemeRegistration {
  /** Theme ID (auto-prefixed with plugin ID, e.g. "my-plugin.dracula") */
  id: string;
  /** Absolute theme ID -- if set, used as-is without plugin ID prefix */
  absoluteId?: string;
  /** Display label */
  label: string;
  /** Optional description */
  description?: string;
  /** Optional preview image path (relative to plugin dir) */
  preview?: string;
  /** Dark mode colors */
  dark: ThemeColors;
  /** Light mode colors */
  light: ThemeColors;
}

// ============ STORAGE API ============

/** Per-plugin persistent key-value storage */
export interface PluginStorage {
  get<T>(key: string): Promise<T | null>;
  set<T>(key: string, value: T): Promise<void>;
  delete(key: string): Promise<void>;
  keys(): Promise<string[]>;
  clear(): Promise<void>;
}

// ============ LOGGER ============

/** Plugin logger with prefixed output */
export interface PluginLogger {
  info(message: string, ...args: unknown[]): void;
  warn(message: string, ...args: unknown[]): void;
  error(message: string, ...args: unknown[]): void;
  debug(message: string, ...args: unknown[]): void;
}
