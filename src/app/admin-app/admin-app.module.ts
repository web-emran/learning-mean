import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-app-routing.module';
import { AdminAppComponent } from './admin-app.component';
import { MenuSetupComponent } from './menu-setup/menu-setup.component';
import { ProductSetupComponent } from './product-setup/product-setup.component';

@NgModule({
  declarations: [AdminAppComponent, MenuSetupComponent, ProductSetupComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AdminRoutingModule,
  ],
})
export class AdminAppModule {}
