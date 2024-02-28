import { Component } from '@angular/core';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProductInfoInterface } from '../../dto/product-info.dto';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ModalModule,
    BsDropdownModule,
  ],
  providers: [BsModalService],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  modalRef: BsModalRef | undefined;

  productList: Array<ProductInfoInterface> = [];
  archivedProducts: Array<ProductInfoInterface> = [];

  constructor(private BsModalService: BsModalService) {}

  ngOnInit() {
    const storedData = localStorage.getItem('product-form-data');
    if (storedData !== null) {
      this.productList = JSON.parse(storedData);
    }

    const archivedData = localStorage.getItem('archived-products');
    if (archivedData !== null) {
      this.archivedProducts = JSON.parse(archivedData);
    }
  }

  addEditProductModal(product: ProductInfoInterface | null = null) {
    const initialState = {
      title: 'Product Modal',
      product: product,
    };

    this.modalRef = this.BsModalService.show(AddEditProductComponent, {
      class: 'modal-lg',
      initialState: initialState,
      backdrop: true,
      ignoreBackdropClick: true,
    });
  }

  deleteProduct(productIndex: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      const deletedProduct = this.productList.splice(productIndex, 1)[0];
      this.archivedProducts.push(deletedProduct);
      localStorage.setItem(
        'product-form-data',
        JSON.stringify(this.productList)
      );
      localStorage.setItem(
        'archived-products',
        JSON.stringify(this.archivedProducts)
      );
    }
  }
}
