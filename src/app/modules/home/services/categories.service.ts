import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  categoriesList = [
    {
      "id": "1",
      "title": {
        "ar": "الخضروات والفواكه",
        "en": "vegetables & fruits"
      },
      "path": "vegetables-fruits",
      "imagePath": "/vegetables-fruits.png",
      "totalItems": 132
    },
    {
      "id": "2",
      "title": {
        "ar": "المشروبات",
        "en": "beverages"
      },
      "path": "beverages",
      "imagePath": "/beverages.png",
      "totalItems": 67
    },
    {
      "id": "3",
      "title": {
        "ar": "المجمدات",
        "en": "frozen"
      },
      "path": "frozen",
      "imagePath": "/frozen.png",
      "totalItems": 98
    },
    {
      "id": "4",
      "title": {
        "ar": "البقوليات",
        "en": "legumes"
      },
      "path": "legumes",
      "imagePath": "/legumes.png",
      "totalItems": 54
    },
    {
      "id": "5",
      "title": {
        "ar": "الوجبات الخفيفة",
        "en": "snacks"
      },
      "path": "snacks",
      "imagePath": "/snacks.png",
      "totalItems": 76
    },
    {
      "id": "6",
      "title": {
        "ar": "الأطعمة",
        "en": "food"
      },
      "path": "food",
      "imagePath": "/food.png",
      "totalItems": 203
    },
    {
      "id": "7",
      "title": {
        "ar": "الزيوت",
        "en": "oils"
      },
      "path": "oils",
      "imagePath": "/oils.png",
      "totalItems": 42
    },
    {
      "id": "8",
      "title": {
        "ar": "اللحوم",
        "en": "meats"
      },
      "path": "meats",
      "imagePath": "/meats.png",
      "totalItems": 115
    }
  ]



  getCategories(){
    return this.categoriesList
  }
}
