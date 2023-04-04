import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IBrand } from 'src/app/shared/models/iBrand';

@Component({
  selector: 'app-brand-item-card',
  templateUrl: './brand-item-card.component.html',
  styleUrls: ['./brand-item-card.component.scss']
})
export class BrandItemCardComponent implements OnInit {
  @Input() brand : IBrand;
  constructor(
    public translate : TranslateService
  ) { }
  ngOnInit(): void { }

}
