/**
 * Pre-export UI5 web components so Vite discovers and bundles them at dev server startup.
 * Without this, adding many new component imports at once (e.g. when AI generates code)
 * causes Vite to re-optimize on the fly, which can trigger an esbuild deadlock.
 *
 * Using `export * from` instead of bare `import` avoids esbuild "ignored-bare-import"
 * warnings (the package has "sideEffects": false). Unused re-exports are tree-shaken
 * in production builds.
 */

// Layout & containers
export * from '@fundamental-ngx/ui5-webcomponents/bar';
export * from '@fundamental-ngx/ui5-webcomponents/card';
export * from '@fundamental-ngx/ui5-webcomponents/card-header';
export * from '@fundamental-ngx/ui5-webcomponents/carousel';
export * from '@fundamental-ngx/ui5-webcomponents/dialog';
export * from '@fundamental-ngx/ui5-webcomponents/panel';
export * from '@fundamental-ngx/ui5-webcomponents/popover';
export * from '@fundamental-ngx/ui5-webcomponents/responsive-popover';
export * from '@fundamental-ngx/ui5-webcomponents/toolbar';
export * from '@fundamental-ngx/ui5-webcomponents/toolbar-button';
export * from '@fundamental-ngx/ui5-webcomponents/toolbar-select';
export * from '@fundamental-ngx/ui5-webcomponents/toolbar-select-option';
export * from '@fundamental-ngx/ui5-webcomponents/toolbar-separator';
export * from '@fundamental-ngx/ui5-webcomponents/toolbar-spacer';

// Navigation
export * from '@fundamental-ngx/ui5-webcomponents/breadcrumbs';
export * from '@fundamental-ngx/ui5-webcomponents/breadcrumbs-item';
export * from '@fundamental-ngx/ui5-webcomponents/tab-container';
export * from '@fundamental-ngx/ui5-webcomponents/tab';
export * from '@fundamental-ngx/ui5-webcomponents/tab-separator';

// Forms & inputs
export * from '@fundamental-ngx/ui5-webcomponents/button';
export * from '@fundamental-ngx/ui5-webcomponents/check-box';
export * from '@fundamental-ngx/ui5-webcomponents/color-palette';
export * from '@fundamental-ngx/ui5-webcomponents/color-palette-item';
export * from '@fundamental-ngx/ui5-webcomponents/color-palette-popover';
export * from '@fundamental-ngx/ui5-webcomponents/color-picker';
export * from '@fundamental-ngx/ui5-webcomponents/combo-box';
export * from '@fundamental-ngx/ui5-webcomponents/combo-box-item';
export * from '@fundamental-ngx/ui5-webcomponents/combo-box-item-group';
export * from '@fundamental-ngx/ui5-webcomponents/date-picker';
export * from '@fundamental-ngx/ui5-webcomponents/date-range-picker';
export * from '@fundamental-ngx/ui5-webcomponents/date-time-picker';
export * from '@fundamental-ngx/ui5-webcomponents/dynamic-date-range';
export * from '@fundamental-ngx/ui5-webcomponents/file-uploader';
export * from '@fundamental-ngx/ui5-webcomponents/form';
export * from '@fundamental-ngx/ui5-webcomponents/form-group';
export * from '@fundamental-ngx/ui5-webcomponents/form-item';
export * from '@fundamental-ngx/ui5-webcomponents/input';
export * from '@fundamental-ngx/ui5-webcomponents/label';
export * from '@fundamental-ngx/ui5-webcomponents/multi-combo-box';
export * from '@fundamental-ngx/ui5-webcomponents/multi-combo-box-item';
export * from '@fundamental-ngx/ui5-webcomponents/multi-combo-box-item-group';
export * from '@fundamental-ngx/ui5-webcomponents/multi-input';
export * from '@fundamental-ngx/ui5-webcomponents/option';
export * from '@fundamental-ngx/ui5-webcomponents/option-custom';
export * from '@fundamental-ngx/ui5-webcomponents/radio-button';
export * from '@fundamental-ngx/ui5-webcomponents/range-slider';
export * from '@fundamental-ngx/ui5-webcomponents/rating-indicator';
export * from '@fundamental-ngx/ui5-webcomponents/segmented-button';
export * from '@fundamental-ngx/ui5-webcomponents/segmented-button-item';
export * from '@fundamental-ngx/ui5-webcomponents/select';
export * from '@fundamental-ngx/ui5-webcomponents/slider';
export * from '@fundamental-ngx/ui5-webcomponents/split-button';
export * from '@fundamental-ngx/ui5-webcomponents/step-input';
export * from '@fundamental-ngx/ui5-webcomponents/switch';
export * from '@fundamental-ngx/ui5-webcomponents/text-area';
export * from '@fundamental-ngx/ui5-webcomponents/time-picker';
export * from '@fundamental-ngx/ui5-webcomponents/toggle-button';
export * from '@fundamental-ngx/ui5-webcomponents/token';
export * from '@fundamental-ngx/ui5-webcomponents/tokenizer';

// Data display
export * from '@fundamental-ngx/ui5-webcomponents/avatar';
export * from '@fundamental-ngx/ui5-webcomponents/avatar-badge';
export * from '@fundamental-ngx/ui5-webcomponents/avatar-group';
export * from '@fundamental-ngx/ui5-webcomponents/busy-indicator';
export * from '@fundamental-ngx/ui5-webcomponents/expandable-text';
export * from '@fundamental-ngx/ui5-webcomponents/icon';
export * from '@fundamental-ngx/ui5-webcomponents/link';
export * from '@fundamental-ngx/ui5-webcomponents/list';
export * from '@fundamental-ngx/ui5-webcomponents/list-item-standard';
export * from '@fundamental-ngx/ui5-webcomponents/list-item-custom';
export * from '@fundamental-ngx/ui5-webcomponents/list-item-group';
export * from '@fundamental-ngx/ui5-webcomponents/menu';
export * from '@fundamental-ngx/ui5-webcomponents/menu-item';
export * from '@fundamental-ngx/ui5-webcomponents/menu-item-group';
export * from '@fundamental-ngx/ui5-webcomponents/menu-separator';
export * from '@fundamental-ngx/ui5-webcomponents/message-strip';
export * from '@fundamental-ngx/ui5-webcomponents/progress-indicator';
export * from '@fundamental-ngx/ui5-webcomponents/table';
export * from '@fundamental-ngx/ui5-webcomponents/table-header-row';
export * from '@fundamental-ngx/ui5-webcomponents/table-header-cell';
export * from '@fundamental-ngx/ui5-webcomponents/table-row';
export * from '@fundamental-ngx/ui5-webcomponents/table-cell';
export * from '@fundamental-ngx/ui5-webcomponents/table-growing';
export * from '@fundamental-ngx/ui5-webcomponents/table-row-action';
export * from '@fundamental-ngx/ui5-webcomponents/table-row-action-navigation';
export * from '@fundamental-ngx/ui5-webcomponents/table-selection';
export * from '@fundamental-ngx/ui5-webcomponents/table-selection-multi';
export * from '@fundamental-ngx/ui5-webcomponents/table-selection-single';
export * from '@fundamental-ngx/ui5-webcomponents/table-virtualizer';
export * from '@fundamental-ngx/ui5-webcomponents/tag';
export * from '@fundamental-ngx/ui5-webcomponents/text';
export * from '@fundamental-ngx/ui5-webcomponents/title';
export * from '@fundamental-ngx/ui5-webcomponents/toast';
export * from '@fundamental-ngx/ui5-webcomponents/tree';
export * from '@fundamental-ngx/ui5-webcomponents/tree-item';
export * from '@fundamental-ngx/ui5-webcomponents/tree-item-custom';

// Suggestion items (for Input/ComboBox)
export * from '@fundamental-ngx/ui5-webcomponents/suggestion-item';
export * from '@fundamental-ngx/ui5-webcomponents/suggestion-item-custom';
export * from '@fundamental-ngx/ui5-webcomponents/suggestion-item-group';

// Calendar
export * from '@fundamental-ngx/ui5-webcomponents/calendar';
export * from '@fundamental-ngx/ui5-webcomponents/calendar-date';
export * from '@fundamental-ngx/ui5-webcomponents/calendar-date-range';
export * from '@fundamental-ngx/ui5-webcomponents/calendar-legend';
export * from '@fundamental-ngx/ui5-webcomponents/calendar-legend-item';
export * from '@fundamental-ngx/ui5-webcomponents/special-calendar-date';
