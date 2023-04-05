import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FooterService } from '../services/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  linksList: { title: { en: string; ar: string; }; path: string; }[];


  constructor(
    private footerService: FooterService,
    public translate: TranslateService
    ) {
     this.linksList = this.footerService.getFooterListLinks()
   }
}
