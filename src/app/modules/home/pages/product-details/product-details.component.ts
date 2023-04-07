import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product = {
    "id": "12345",
    "name": {
      "ar": "اسم المنتج",
      "en": "Product Name"
    },
    "description": {
      "ar": " وصف موجز للمنتج يذهب هنا لوريم إيبسوم دولور سيت أميت",
      "en": "A brief description of the product goes here lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    "moreInfo": {
      "ar": " لوريم إيبسوم دولور سيت أمي لوريم إيبسوم دولور سيت أمي إيبسوم إيبسوم إيبسوم إيبسوم إيبسوم  لوريم إيبسوم دولور سيت أميلوريم إيبسوم دولور سيت أميلوريم إيبسوم دولور سيت أمي وصف موجز للمنتج يذهب هنا لوريم إيبسوم دولور سيت أميت",
      "en": "A brief description of the product goes here lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit A brief description of the product goes here lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit "
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
    "image": "https://example.com/product-image.jpg",
    "features": {
      "ar": [
        "الميزة 1",
        "الميزة 2",
        "الميزة 3"
      ],
      "en": [
        "Feature 1",
        "Feature 2",
        "Feature 3"
      ]
    },
    "reviews": [
      {
        "id": "1",
        "username": "User1",
        "rating": 4,
        "comment": {
          "ar": "أحب هذا المنتج!",
          "en": "I love this product!"
        },
        "date": "2022-03-15T12:00:00Z"
      },
      {
        "id": "2",
        "username": "User2",
        "rating": 3,
        "comment": {
          "ar": "جيد، لكن يمكن أن يكون أفضل.",
          "en": "It's okay, but could be better."
        },
        "date": "2022-03-20T15:30:00Z"
      }
    ],
    "specs": {

      "Model": {
        "ar": "رقم الموديل",
        "en": "Model Number"
      },
      "Weight": {
        "ar": "الوزن",
        "en": "Weight"
      },
      "Dimensions": {
        "ar": "الأبعاد",
        "en": "Dimensions"
      },
      "Color": {
        "ar": "اللون",
        "en": "Color"
      }
    }
  }

  quantity = 1;
  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
  }

  addToCart(){
    console.log('Add to cart');

  }

  increaseProductCount() {
    this.quantity++;
  }
  decreaseProductCount() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
