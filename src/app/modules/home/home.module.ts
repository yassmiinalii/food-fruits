import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { CategoryListSectionComponent } from './sections/category-list-section/category-list-section.component';

@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    CategoryItemComponent,
    CategoryListSectionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgbCarouselModule
  ],
  exports:[
    HomePageComponent,

  ]
})
export class HomeModule { }
