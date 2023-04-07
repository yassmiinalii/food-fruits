import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { CategoryListSectionComponent } from './sections/category-list-section/category-list-section.component';
import { BrandsListSectionComponent } from './sections/brands-list-section/brands-list-section.component';
import { BrandItemCardComponent } from './components/brand-item-card/brand-item-card.component';
import { BestSellersSectionComponent } from './sections/best-sallers-section/best-sellers-section.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { AdBannerComponent } from './sections/ad-banner/ad-banner.component';
import { FutureProductsComponent } from './sections/future-products/future-products.component';
import { DownloadAppComponent } from './sections/download-app/download-app.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { BrandsPageComponent } from './pages/brands-page/brands-page.component';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    CategoryItemComponent,
    CategoryListSectionComponent,
    BrandsListSectionComponent,
    BrandItemCardComponent,
    BestSellersSectionComponent,
    ProductCardComponent,
    AdBannerComponent,
    FutureProductsComponent,
    DownloadAppComponent,
    CategoriesPageComponent,
    BrandsPageComponent,
    ProductListPageComponent,
    ProductDetailsComponent
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
