import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor() { }

  footerListLinks = [
    {
      title: {
        en: 'Home',
        ar: 'الرئيسية'
      },
      path: '/'
    },
    {
      title: {
        en: 'Brands',
        ar: 'الماركات'
      },
      path: '/brands'
    },
    {
      title: {
        en: 'Best Offers',
        ar: 'أفضل العروض'
      },
      path: '/products'
    },
    {
      title: {
        en: 'best sellers',
        ar: 'أفضل البائعين'
      },
      path: '/products'
    },
    {
      title: {
        en: 'Future products',
        ar: 'المنتجات المستقبلية'
      },
      path: '/products'
    },
    {
      title: {
        en: 'account',
        ar: 'الحساب'
      },
      path: '/my-account'
    },
    {
      title: {
        en: 'cart',
        ar: 'سلةالمشتريات'
      },
      path: '/checkout'
    },
    {
      title: {
        en: 'favorites',
        ar: 'المفضلة'
      },
      path: '/my-account'
    },
    {
      title: {
        en: 'orders',
        ar: 'الطلبات'
      },
      path: '/my-account'
    },
    {
      title: {
        en: 'adresses',
        ar: 'العناوين'
      },
      path: '/my-account'
    },
    {
      title: {
        en: 'About',
        ar: 'من نحن'
      },
      path: '/about'
    },
    {
      title: {
        en: 'Contact Us',
        ar: 'اتصل بنا'
      },
      path: '/contact-us'
    },
    {
      title: {
        en: 'Terms & conditions',
        ar: 'الشروط والأحكام'
      },
      path: '/terms-and-conditions'
    },
    {
      title: {
        en: 'privacy policy',
        ar: 'سياسة الخصوصية'
      },
      path: '/privacy-policy'
    }
  ];

  getFooterListLinks() {
    return this.footerListLinks;
  }
}
