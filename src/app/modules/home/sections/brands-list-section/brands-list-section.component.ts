import { IBrand } from 'src/app/shared/models/iBrand';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands-list-section',
  templateUrl: './brands-list-section.component.html',
  styleUrls: ['./brands-list-section.component.scss']
})
export class BrandsListSectionComponent implements OnInit {

  @Input() viewAll: boolean = false;
  brandsList : IBrand[] = [
    {
      id: "1",
      name: {
        ar: "اسم العلامة",
        en: "Brand Name",
      },
      description: {
        ar: "فقط افعلها.",
        en: "Just Do It.",
      },
      logoPath: "../../../../../assets/imgs/place-holder.png",
      path: "/brands/nike",
    },
    {
      id: "1",
      name: {
        ar: "اسم العلامة",
        en: "Brand Name",
      },
      description: {
        ar: "فقط افعلها.",
        en: "Just Do It.",
      },
      logoPath: "../../../../../assets/imgs/place-holder.png",
      path: "/brands/nike",
    },
    {
      id: "1",
      name: {
        ar: "اسم العلامة",
        en: "Brand Name",
      },
      description: {
        ar: "فقط افعلها.",
        en: "Just Do It.",
      },
      logoPath: "../../../../../assets/imgs/place-holder.png",
      path: "/brands/nike",
    },
    {
      id: "1",
      name: {
        ar: "اسم العلامة",
        en: "Brand Name",
      },
      description: {
        ar: "فقط افعلها.",
        en: "Just Do It.",
      },
      logoPath: "../../../../../assets/imgs/place-holder.png",
      path: "/brands/nike",
    },
    {
      id: "1",
      name: {
        ar: "اسم العلامة",
        en: "Brand Name",
      },
      description: {
        ar: "فقط افعلها.",
        en: "Just Do It.",
      },
      logoPath: "../../../../../assets/imgs/place-holder.png",
      path: "/brands/nike",
    },
    {
      id: "1",
      name: {
        ar: "اسم العلامة",
        en: "Brand Name",
      },
      description: {
        ar: "فقط افعلها.",
        en: "Just Do It.",
      },
      logoPath: "../../../../../assets/imgs/place-holder.png",
      path: "/brands/nike",
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

