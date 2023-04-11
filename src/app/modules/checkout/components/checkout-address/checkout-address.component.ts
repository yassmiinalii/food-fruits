import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout-address',
  templateUrl: './checkout-address.component.html',
  styleUrls: ['./checkout-address.component.scss']
})
export class CheckoutAddressComponent  implements OnInit{

  addressForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { }
  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.addressForm = this.formBuilder.group({
      firstName: ['', Validators.required],
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
