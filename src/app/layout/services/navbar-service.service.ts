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
    {title: {ar: 'الأكثر مبيعًا', en: 'Best sellers'}, path: '/products'},
    {title: {ar: 'المنتجات المستقبلية', en: 'products'}, path: '/products'},
    {title: {ar: 'أفضل العروض', en: 'Best Offers'}, path: '/products'},
  ];

  getMenuItems(){
    return this.menuItems;
  }
}
