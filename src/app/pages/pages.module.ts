import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [PagesComponent, HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
