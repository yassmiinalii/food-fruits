import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserMainComponent } from './user-main/user-main.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddressComponent } from './components/address/address.component';
import { OrdersComponent } from './components/orders/orders.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { AddressCardComponent } from './components/address/address-card/address-card.component';


@NgModule({
  declarations: [
    UserMainComponent,
    ProfileComponent,
    AddressComponent,
    OrdersComponent,
    FavoritesComponent,
    AddressCardComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
