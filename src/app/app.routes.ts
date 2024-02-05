import { Routes } from '@angular/router';
import { AdminAppComponent } from './admin-app/admin-app.component';

export const routes: Routes = [

  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
  },

  {
    path: 'admin-app',
    component: AdminAppComponent
  }
];
