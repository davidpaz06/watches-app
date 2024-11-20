import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'watches-app-405da',
        appId: '1:1070938717845:web:0675aeca4903600da6659c',
        storageBucket: 'watches-app-405da.firebasestorage.app',
        apiKey: 'AIzaSyDvcTPNbkneqjoqGT7RCAA2-sGsK77Gn_Q',
        authDomain: 'watches-app-405da.firebaseapp.com',
        messagingSenderId: '1070938717845',
        measurementId: 'G-0NTPJN85YS',
      })
    ),
    provideAuth(() => getAuth()),
  ],
};
