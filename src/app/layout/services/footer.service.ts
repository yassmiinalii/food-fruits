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
      path: '/offers'
    },
    {
      title: {
        en: 'best sellers',
        ar: 'أفضل البائعين'
      },
      path: '/sellers'
    },
    {
      title: {
        en: 'Future products',
        ar: 'المنتجات المستقبلية'
      },
      path: '/future-products'
    },
    {
      title: {
        en: 'account',
        ar: 'الحساب'
      },
      path: '/account'
    },
    {
      title: {
        en: 'cart',
        ar: 'سلةالمشتريات'
      },
      path: '/cart'
    },
    {
      title: {
        en: 'favorites',
        ar: 'المفضلة'
      },
      path: '/favorites'
    },
    {
      title: {
        en: 'orders',
        ar: 'الطلبات'
      },
      path: '/orders'
    },
    {
      title: {
        en: 'adresses',
        ar: 'العناوين'
      },
      path: '/addresses'
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
