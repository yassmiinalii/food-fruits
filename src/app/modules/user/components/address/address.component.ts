import { Component } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {

  addressList = [
    { id: 1, name: 'Home', address: '123, Main Street, New York, NY 10001', phone: '1234567890' },
    { id: 2, name: 'Office', address: '456, Main Street, New York, NY 10001', phone: '1234567890' },

  ];
  constructor() { }

  onEdit() {
    console.log('Edit');
  }
  onDelete() {
    console.log('Delete');
  }


}
