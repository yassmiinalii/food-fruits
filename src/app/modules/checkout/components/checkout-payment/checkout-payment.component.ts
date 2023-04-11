import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.scss']
})
export class CheckoutPaymentComponent implements OnInit{

  paymentForm: FormGroup;
  paymentMethods = [
    { id: 1, name: 'Credit Card' , icon: 'assets/images/credit-card.png' },
    { id: 2, name: 'Cash' },
    { id: 2, name: 'Knet' },
    { id: 3, name: 'Apple Pay' }
  ];
  paymentMethod = 1;
  constructor(
    private formBuilder: FormBuilder
  ) { }
  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.paymentForm = this.formBuilder.group({
      cardholderName: ['', Validators.required],
      lastName: ['',Validators.required],
      address: ['',Validators.required],
      city: ['',Validators.required],
      Apartment: ['',Validators.required],
      state: [''],
      markLand: [''],
      zip: [''],
      phone: [''],
      email: [''],
      sameAsShipping: [false]
    });
  }
}
