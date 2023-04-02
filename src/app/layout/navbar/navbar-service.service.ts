import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarServiceService {

  constructor() { }

  //make menuItems title object c en and ar
  menuItems = [
   {title: 'Home', path: '/home'},
   {title: 'Brands', path: '/brands'},
   {title: 'Best sellers', path: '/bestSellers'},
   {title: 'Future products', path: '/futureProducts'},
   {title: 'Best Offers', path: '/bestOffers'},
  ];

  getMenuItems(){
    return this.menuItems;
  }
}
