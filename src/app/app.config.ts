import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation, withInMemoryScrolling, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { headersInterceptor } from './core/interceptors/headers/headers.interceptor';
import { errorInterceptor } from './core/interceptors/error/error.interceptor';
import { loadingInterceptor } from './core/interceptors/loading/loading.interceptor';
export const appConfig: ApplicationConfig = {
  providers: [
    provideToastr(),
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes,
    withViewTransitions(),

    withInMemoryScrolling({scrollPositionRestoration:'top'})),provideHttpClient(withFetch(),withInterceptors([headersInterceptor,errorInterceptor
      ,loadingInterceptor
    ])),
    provideAnimations()
    , provideClientHydration(withEventReplay())]
};
