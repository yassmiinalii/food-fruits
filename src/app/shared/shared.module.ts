import { HomeModule } from './../modules/home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TranslateLoader, TranslateModule, TranslateStore } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbAccordionModule,
    RouterModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot() ,
  ],
  exports:[
    NgbAccordionModule,
    RouterModule,
    AngularSvgIconModule,
    TranslateModule
  ],
  providers:[TranslateStore ]
})
export class SharedModule { }
