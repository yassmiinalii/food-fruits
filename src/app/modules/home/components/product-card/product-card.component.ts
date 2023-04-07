import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  isAddedToCart: boolean = false;
  isAddedToWishlist: boolean = false;
  constructor() { }

  ngOnInit(): void {}

  ProductAddToCartCount: number = 1;
  increaseProductCount() {
    this.ProductAddToCartCount++;
  }
  decreaseProductCount() {
    if (this.ProductAddToCartCount > 1) {
      this.ProductAddToCartCount--;
    }
  }

  changeAddToCartStatus() {
    this.isAddedToCart = !this.isAddedToCart;
  }

  changeAddToWishlistStatus() {
    this.isAddedToWishlist = !this.isAddedToWishlist;
  }

  navigate(){
    console.log("navigate")
  }
}
