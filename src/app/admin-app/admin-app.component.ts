import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormDataService } from '../services/form-data-service';

@Component({
  selector: 'app-admin-app',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './admin-app.component.html',
  styleUrl: './admin-app.component.scss'
})
export class AdminAppComponent {
  menuCreateForm = this.formBuilder.group({
    categoryName: ['', Validators.required],
    categoryID: ['', Validators.required],
  });

  formDataArray: any;

  constructor(
    private formBuilder: FormBuilder,
    public formDataService: FormDataService
  ) { }

  ngOnInit() {
    this.formDataService.retrieveFormDataFromLocalStorage();
    this.formDataArray = this.formDataService.getFormDataArray();
  }

  onSubmit() {
    console.log(this.menuCreateForm.value);

    this.formDataService.addFormData(this.menuCreateForm.value);
    this.formDataService.saveFormDataToLocalStorage();

    this.menuCreateForm.reset();
  }

  get getForms() {
    return this.menuCreateForm.controls;
  }
}
