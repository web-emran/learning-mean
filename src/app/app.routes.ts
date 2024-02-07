import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  {
    path: 'pages',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },

  {
    path: 'admin-app',
    loadChildren: () =>
      import('./admin-app/admin-app.module').then((m) => m.AdminAppModule),
  },
];
