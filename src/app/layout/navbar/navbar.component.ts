import { NavbarServiceService } from '../services/navbar-service.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CategoriesService } from 'src/app/modules/home/services/categories.service';
import { ICategory } from 'src/app/shared/models/iCategory';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { CartOffcanvasComponent } from '../cart-offcanvas/cart-offcanvas.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  implements OnInit {
  hiddenContent: boolean ;
  openCartOffcanvas: boolean;
  categoriesList: ICategory[];
  currentLanguage: string;
  menuItems: { title: { ar: string; en: string; }; path: string; }[];
  constructor (
    private NavbarServiceService: NavbarServiceService,
    private categoriesService: CategoriesService,
    public translate: TranslateService,
    private offcanvasService: NgbOffcanvas
    ) {
      this.initCurrentLanguage();
   }

  ngOnInit(): void {
    this.menuItems = this.NavbarServiceService.getMenuItems();
    this.getCategoriesList();
  }
  initCurrentLanguage() {

    this.currentLanguage = localStorage.getItem('language') || 'en';
    this.translate.use(this.currentLanguage);
  }


  displayHiddenContent(){
    this.hiddenContent = !this.hiddenContent;
  }

  changeLanguage(language: string) {
    let newLanguage : string;
    if (language === 'ar') {
      newLanguage = 'en';
      this.translate.setDefaultLang('en');
      this.currentLanguage = 'en';
    }
    else {
      newLanguage = 'ar';
      this.translate.setDefaultLang('ar');
      this.currentLanguage = 'ar';
    }
    this.translate.use(newLanguage);
    localStorage.setItem('language', newLanguage);
  }

  getCategoriesList(){
    this.categoriesList =  this.categoriesService.getCategories();
  }



  onCartOpen(){
    console.log('onCartOpen');
    const offcanvasRef = this.offcanvasService.open(CartOffcanvasComponent , { position: 'end' });
     offcanvasRef.componentInstance.name = 'World';
  }



}


