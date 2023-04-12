import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {

  orderList = [
    {
      id: 1,
      name: { ar: 'الطلب 1', en: 'Order 1' },
      status: 'Pending',
      date: '2019-01-01',
      total: 100,
      items: 2
    },
    {
      id: 2,
      name: { ar: 'الطلب 2', en: 'Order 2' },
      status: 'Pending',
      date: '2019-01-01',
      total: 100,
      items: 3
    },
    {
      id: 3,
      name: { ar: 'الطلب 3', en: 'Order 3' },
      status: 'Pending',
      date: '2019-01-01',
      total: 100,
      items: 4
    },
  ];

  constructor() { }

}
