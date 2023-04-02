import { CategoriesService } from '../../services/categories.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ICategory } from 'src/app/shared/models/iCategory';

@Component({
  selector: 'app-category-list-section',
  templateUrl: './category-list-section.component.html',
  styleUrls: ['./category-list-section.component.scss']
})
export class CategoryListSectionComponent implements OnInit {

  selectedCategory: number = 0;
  categoriesList: ICategory[];

  constructor(
    private categoriesService: CategoriesService,
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.getCategoriesList();
  }

  getCategoriesList(){
    this.categoriesList =  this.categoriesService.getCategories();
  }

  selectCategory(id:number){
    this.selectedCategory = id;
  }


}
