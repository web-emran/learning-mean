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
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './admin-app.component.html',
  styleUrl: './admin-app.component.scss',
})
export class AdminAppComponent {
  menuCreateForm = this.formBuilder.group({
    categoryName: ['', Validators.required],
    categoryID: ['', Validators.required],
    fkParentID: [null],
  });

  formDataArray: Array<categoryMenu> = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    if (typeof localStorage !== 'undefined') {
      const storedData = localStorage.getItem('form-data');
      if (storedData !== null) {
        this.formDataArray = JSON.parse(storedData);
      }
    }
  }

  onSubmit() {
    console.log(this.formDataArray);

    const formData = this.menuCreateForm.value as categoryMenu;

    const categoryIdExists = this.formDataArray.some(
      (entry: categoryMenu) => entry.categoryID === formData.categoryID
    );

    if (categoryIdExists) {
      window.alert(`Category ID ${formData.categoryID} already exists.`);
    } else {
      this.formDataArray.push(formData);

      localStorage.setItem('form-data', JSON.stringify(this.formDataArray));

      this.menuCreateForm.reset();
    }
  }
}
