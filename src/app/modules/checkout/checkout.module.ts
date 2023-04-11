import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutMainComponent } from './components/checkout-main/checkout-main.component';
import { CheckoutAddressComponent } from './components/checkout-address/checkout-address.component';
import { CheckoutPaymentComponent } from './components/checkout-payment/checkout-payment.component';
import { CheckoutDoneComponent } from './components/checkout-done/checkout-done.component';


@NgModule({
  declarations: [
    CheckoutMainComponent,
    CheckoutAddressComponent,
    CheckoutPaymentComponent,
    CheckoutDoneComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    SharedModule
  ]
})
export class CheckoutModule { }
