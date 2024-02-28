import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuSetupComponent } from './menu-setup/menu-setup.component';
import { AdminAppComponent } from './admin-app.component';
import { ProductSetupComponent } from './product-setup/product-setup.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path: '',
    component: AdminAppComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: MenuSetupComponent,
      },
      {
        path: 'product-setup',
        component: ProductSetupComponent,
      },
      {
        path: 'product-list',
        component: ProductListComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
