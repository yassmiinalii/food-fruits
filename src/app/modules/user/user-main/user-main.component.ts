import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.scss'],
})
export class UserMainComponent {
  step = 0;

  menuList = [
    {
      name: {
        en: 'Profile',
        ar: 'الملف الشخصي',
      },
      id: 1,
    },
    {
      name: {
        en: 'Address',
        ar: 'العنوان',
      },
      id: 2,
    },
    {
      name: {
        en: 'Orders',
        ar: 'الطلبات',
      },
      id: 3,
    },
    {
      name: {
        en: 'Favorites',
        ar: 'المفضلة',
      },
      id: 4,
    },
  ];

  constructor( public translate : TranslateService) {}
  onStep(step: number) {
    this.step = step;
  }
}
