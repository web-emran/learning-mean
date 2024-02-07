import { Component } from '@angular/core';
import { ProductInfoInterface } from '../../dto/product-info.dto';
import { FormBuilder, Validators } from '@angular/forms';
import { categoryMenu } from '../../dto/menu-category.dto';

@Component({
  selector: 'app-product-setup',
  templateUrl: './product-setup.component.html',
  styleUrl: './product-setup.component.scss',
})
export class ProductSetupComponent {
  formDataArray: Array<categoryMenu> = [];

  productFormArray: Array<ProductInfoInterface> = [];

  private idCounter: number;

  productForm = this.fb.group({
    productId: ['', Validators.required],
    productTitle: ['', Validators.required],
    productPrice: ['', Validators.required],
    photo: [null],
    productDiscount: [''],
    productWeight: ['', Validators.required],
    productfkParentId: ['', Validators.required],
    productDescription: [''],
  });

  constructor(private fb: FormBuilder) {
    const storedIdCounter = localStorage.getItem('idCounter');
    this.idCounter = storedIdCounter ? parseInt(storedIdCounter) : 1;
  }

  ngOnInit() {
    if (typeof localStorage !== 'undefined') {
      const storeData = localStorage.getItem('form-data');

      if (storeData !== null) {
        this.formDataArray = JSON.parse(storeData);
      }
    }
  }

  onSubmit() {
    const productFormData = this.productForm.value as ProductInfoInterface;

    productFormData.productId = this.idCounter++;

    this.productFormArray.push(productFormData);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(
        'product-form-data',
        JSON.stringify(this.productFormArray)
      );
    }

    this.productForm.reset();
  }
}
