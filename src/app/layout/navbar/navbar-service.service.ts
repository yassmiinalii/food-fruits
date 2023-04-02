import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarServiceService {

  constructor() { }

  //make menuItems title object c en and ar
  menuItems = [
    {title: {ar: 'الرئيسية', en: 'Home'}, path: '/home'},
    {title: {ar: 'العلامات التجارية', en: 'Brands'}, path: '/brands'},
    {title: {ar: 'الأكثر مبيعًا', en: 'Best sellers'}, path: '/bestSellers'},
    {title: {ar: 'المنتجات المستقبلية', en: 'Future products'}, path: '/futureProducts'},
    {title: {ar: 'أفضل العروض', en: 'Best Offers'}, path: '/bestOffers'},
  ];

  getMenuItems(){
    return this.menuItems;
  }
}
