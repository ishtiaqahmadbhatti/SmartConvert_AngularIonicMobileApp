import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'authentication/signin',
    pathMatch: 'full',
  },
  {
    path: 'authentication',
    loadChildren: () => import('./app_modules/authentication/authentication.routes').then(r =>r.AuthenticatioRoutes),
  },
  {
    path: 'profile',
    loadChildren: () => import('./app_modules/profile/profile.routes').then(r => r.ProfileRoutes),
  },
  {
    path: 'verification',
    loadChildren: () => import('./app_modules/verification/verification.routes').then(r => r.VerificationRoutes),
  }
];
