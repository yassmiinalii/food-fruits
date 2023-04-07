import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  priceRangeMin: number = 0;
  priceRangeMax: number = 100;
  constructor(
    public translate : TranslateService
  ) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }


  isOpen = true;
}
