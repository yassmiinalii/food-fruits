import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { CategoryListSectionComponent } from './sections/category-list-section/category-list-section.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
  component: HomePageComponent
  },
  { path: 'categories',
  component: CategoriesPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
