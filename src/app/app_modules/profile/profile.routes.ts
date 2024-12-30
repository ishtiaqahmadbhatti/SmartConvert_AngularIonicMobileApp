import { Routes } from '@angular/router';

export const ProfileRoutes: Routes = [
  {
    path: 'editprofile',
    loadComponent: () => import('./editprofile/editprofile.component').then(c => c.EditprofileComponent)
  },
  {
    path: 'deleteprofile',
    loadComponent: () => import('./deleteprofile/deleteprofile.component').then(c => c.DeleteprofileComponent)
  },
];