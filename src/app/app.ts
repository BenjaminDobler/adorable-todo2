import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemingService } from '@fundamental-ngx/core/theming';
import { setTheme as setUI5Theme } from '@ui5/webcomponents-base/dist/config/Theme.js';
import { Bar } from '@fundamental-ngx/ui5-webcomponents/bar';
import { Select } from '@fundamental-ngx/ui5-webcomponents/select';
import { Option } from '@fundamental-ngx/ui5-webcomponents/option';
import { Title } from '@fundamental-ngx/ui5-webcomponents/title';

interface ThemeOption {
  id: string;
  name: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Bar, Select, Option, Title],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  currentThemeId = signal('leanix');

  themes: ThemeOption[] = [
    { id: 'leanix', name: 'LeanIX' },
    { id: 'sap_horizon', name: 'Morning Horizon (Light)' },
    { id: 'sap_horizon_dark', name: 'Evening Horizon (Dark)' },
    { id: 'sap_horizon_hcb', name: 'High Contrast Black' },
    { id: 'sap_horizon_hcw', name: 'High Contrast White' },
    { id: 'sap_fiori_3', name: 'Quartz Light' },
    { id: 'sap_fiori_3_dark', name: 'Quartz Dark' },
  ];

  constructor(private themingService: ThemingService) {
    themingService.init();
    setUI5Theme('leanix');
  }

  onThemeChange(event: CustomEvent) {
    const selectedOption = event.detail?.selectedOption;
    if (selectedOption) {
      const themeId = selectedOption.getAttribute('value');
      if (themeId) {
        this.currentThemeId.set(themeId);
        this.themingService.setTheme(themeId);
        setUI5Theme(themeId);
      }
    }
  }
}
