import { NavbarServiceService } from '../services/navbar-service.service';
import { LayoutModule } from './../layout.module';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  implements OnInit {
  hiddenContent: boolean ;

  currentLanguage: string;
  menuItems: { title: { ar: string; en: string; }; path: string; }[];
  constructor (
    private NavbarServiceService: NavbarServiceService,
    public translate: TranslateService
    ) {
      this.initCurrentLanguage();
   }

  ngOnInit(): void {
    this.menuItems = this.NavbarServiceService.getMenuItems();
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

}


