import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideTheming, STANDARD_THEMES } from '@fundamental-ngx/core/theming';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideAnimations(),
    provideTheming({
      defaultTheme: 'leanix',
      changeThemeOnQueryParamChange: false,
      customThemes: [
        {
          id: 'leanix',
          name: 'LeanIX',
          description: 'LeanIX Design System theme',
        },
      ],
    }),
  ],
};
