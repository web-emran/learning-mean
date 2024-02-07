import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { categoryMenu } from '../dto/menu-category.dto';

@Component({
  selector: 'app-admin-app',
  templateUrl: './admin-app.component.html',
  styleUrl: './admin-app.component.scss',
})
export class AdminAppComponent {}
