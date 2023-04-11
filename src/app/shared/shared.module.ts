import { HomeModule } from './../modules/home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TranslateLoader, TranslateModule, TranslateStore } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductCartComponent } from './components/product-cart/product-cart.component';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const UIModules = [
  NgbAccordionModule,
  NgbPaginationModule,
  NgbAlertModule,
];

@NgModule({
  declarations: [
    FilterComponent,
    ProductCartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot() ,
    FormsModule,
    TranslateModule,
    ...UIModules

  ],
  exports:[
    RouterModule,
    AngularSvgIconModule,
    TranslateModule,
    FilterComponent,
    ProductCartComponent,
    FormsModule,
    ...UIModules

  ],
  providers:[TranslateStore ]
})
export class SharedModule { }
