import { NavbarServiceService } from './navbar-service.service';
import { LayoutModule } from './../layout.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  implements OnInit {
  hiddenContent: boolean ;
  menuItems: { title: string; path: string; }[];

  constructor ( private NavbarServiceService: NavbarServiceService) {

   }

  ngOnInit(): void {
    this.menuItems = this.NavbarServiceService.getMenuItems();
  }

  displayHiddenContent(){
    this.hiddenContent = !this.hiddenContent;
  }


}


