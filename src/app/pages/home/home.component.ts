import { Component } from '@angular/core';
import { categoryMenu } from '../../dto/menu-category.dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  formDataArray: Array<categoryMenu> = [];
  modifiedData: Array<categoryMenu> = [];

  constructor() {}

  ngOnInit() {
    console.log(this.formDataArray);
    if (typeof localStorage !== 'undefined') {
      const storedData = localStorage.getItem('form-data');
      if (storedData !== null) {
        this.formDataArray = JSON.parse(storedData);
        const buildRecursive = (
          parentId: number | null | undefined
        ): categoryMenu[] => {
          const result: categoryMenu[] = [];
          for (const item of this.formDataArray) {
            if (
              item.fkParentID == parentId ||
              (parentId == undefined && !item.fkParentID)
            ) {
              const category: categoryMenu = {
                categoryID: item.categoryID,
                categoryName: item.categoryName,
                fkParentID: item.fkParentID,
              };
              const children = buildRecursive(item.categoryID);
              if (children.length > 0) {
                category.subCategory = children;
              }
              result.push(category);
            }
          }
          return result;
        };
        const topLevelCategories = buildRecursive(null);
        this.modifiedData = topLevelCategories;
        console.log('Modified Data Array: ', this.modifiedData);
      }
    }
  }
}
