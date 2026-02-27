import './preload-ui5';
import '@ui5/webcomponents/dist/Assets.js';
import { registerThemePropertiesLoader } from '@ui5/webcomponents-base/dist/asset-registries/Themes.js';
import { LEANIX_THEME_CSS } from './app/themes/leanix-theme';

// Register "leanix" as a valid UI5 theme so setTheme('leanix') works without fallback warnings.
// Base theming: load all sap_horizon variables first, then overlay LeanIX overrides.
registerThemePropertiesLoader('@ui5/webcomponents-theming', 'leanix', async () => {
  const horizonBase = (await import('@ui5/webcomponents-theming/dist/generated/assets/themes/sap_horizon/parameters-bundle.css.json')).default;
  return horizonBase + LEANIX_THEME_CSS;
});
// Component-level params: reuse sap_horizon's component styles since LeanIX extends Horizon.
registerThemePropertiesLoader(
  '@ui5/webcomponents',
  'leanix',
  async () => (await import('@ui5/webcomponents/dist/generated/assets/themes/sap_horizon/parameters-bundle.css.json')).default,
  'host',
);

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
