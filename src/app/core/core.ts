import { registerLocaleData } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';
import localePl from '@angular/common/locales/pl';
import { LOCALE_ID, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Routes, provideRouter, withRouterConfig } from '@angular/router';

export interface CoreOptions {
  routes: Routes;
}

registerLocaleData(localePl);

export function provideCore({ routes }: CoreOptions) {
  return [
    provideExperimentalZonelessChangeDetection(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    provideRouter(
      routes,
      withRouterConfig({
        onSameUrlNavigation: 'reload',
      })
    ),
    { provide: LOCALE_ID, useValue: 'pl' },
  ];
}
