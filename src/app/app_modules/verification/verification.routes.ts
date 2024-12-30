import { Routes } from '@angular/router';

export const VerificationRoutes: Routes = [
  {
    path: 'verifyemailaddress',
    loadComponent: () => import('./verifyemailaddress/verifyemailaddress.component').then(c => c.VerifyemailaddressComponent)
  },
  {
    path: 'verifymobilenumber',
    loadComponent: () => import('./verifymobilenumber/verifymobilenumber.component').then(c => c.VerifymobilenumberComponent)
  },
];
