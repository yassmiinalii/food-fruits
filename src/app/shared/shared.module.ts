import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';


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
    AngularSvgIconModule
  ]
})
export class SharedModule { }
