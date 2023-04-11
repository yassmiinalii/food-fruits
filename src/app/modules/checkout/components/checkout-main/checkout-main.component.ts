import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout-main',
  templateUrl: './checkout-main.component.html',
  styleUrls: ['./checkout-main.component.scss']
})
export class CheckoutMainComponent {

  step = 1;


  onStepOne() {
    this.step = 1;
  }
  onStepTwo() {
    this.step = 2;
  }
  onStepThree() {
    this.step = 3;
  }
}
