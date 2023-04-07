import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { CartOffcanvasComponent } from './cart-offcanvas/cart-offcanvas.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CartOffcanvasComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    CartOffcanvasComponent
  ]
})
export class LayoutModule { }
