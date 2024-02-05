import { Component } from '@angular/core';
import { FormDataService } from '../../services/form-data-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  formDataArray: any[] = [];

  constructor(
    public formDataService: FormDataService
  ) { }

  ngOnInit() {
    this.formDataService.retrieveFormDataFromLocalStorage();
    this.formDataArray = this.formDataService.getFormDataArray();

  }
}
