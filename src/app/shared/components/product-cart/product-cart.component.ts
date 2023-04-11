import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent {

  @Input() product = {
    "id": "12345",
    "name": {
      "ar": "اسم المنتج",
      "en": "Product Name"
    },
    "description": {
      "ar": " وصف موجز للمنتج يذهب هنا لوريم إيبسوم دولور سيت أميت",
      "en": "A brief description of the product goes here lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },

    "brand": {
      "ar": "اسم العلامة التجارية",
      "en": "Brand Name"
    },
    "category": {
      "ar": "الإلكترونيات",
      "en": "Electronics"
    },
    "price": 999.99,
    "currency": "USD",
    "image": "https://via.placeholder.com/200x200",

  }
  quantity: number = 1;
  constructor(
    public translate : TranslateService
  ) { }

  increaseProductCount() {
    this.quantity++;
  }
  decreaseProductCount() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
