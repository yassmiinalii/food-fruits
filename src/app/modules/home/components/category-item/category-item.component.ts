
import { Component , Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ICategory } from 'src/app/shared/models/iCategory';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {

  @Input() category: ICategory;
  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
  }
}
