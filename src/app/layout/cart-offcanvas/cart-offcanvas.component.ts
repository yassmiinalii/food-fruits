import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgbActiveOffcanvas, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cart-offcanvas',
  templateUrl: './cart-offcanvas.component.html',
  styleUrls: ['./cart-offcanvas.component.scss']
})
export class CartOffcanvasComponent {
	closeResult = '';

  @Input() isOpened: boolean = false;
  @ViewChild('content') content: ElementRef;

	constructor(
    public activeOffcanvas: NgbActiveOffcanvas,
    public translate : TranslateService
    ) {}


}
