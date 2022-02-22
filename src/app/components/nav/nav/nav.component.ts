import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Categories } from 'src/app/models/categories';
import { InnerCategory } from 'src/app/models/categoryIn';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  categoriesInner1: InnerCategory[] = [
    {
      inCategoryName: 'İç Giyim',
    },
    {
      inCategoryName: 'Elbise',
    },
  ];
  categoriesInner2: InnerCategory[] = [
    {
      inCategoryName: 'Ayakkabı',
    },
    {
      inCategoryName: 'Takım Elbise',
    },
  ];
  categoriesInner3: InnerCategory[] = [
    {
      inCategoryName: 'Çocuk Elbise',
    },
    {
      inCategoryName: 'Sünnetlik',
    },
  ];
  categoriesInner4: InnerCategory[] = [
    {
      inCategoryName: 'Masa',
    },
    {
      inCategoryName: 'Sandalye',
    },
  ];
  categoriesInner5: InnerCategory[] = [
    {
      inCategoryName: 'Unlu mamüller',
    },
    {
      inCategoryName: 'Pasta malzemesi',
    },
  ];
  categoriesInner6: InnerCategory[] = [
    {
      inCategoryName: 'Ruj',
    },
    {
      inCategoryName: 'Rimel',
    },
  ];
  categoriesInner7: InnerCategory[] = [
    {
      inCategoryName: 'Erkek papuç',
    },
    {
      inCategoryName: 'Kadın pauç',
    },
  ];
  categoriesInner8: InnerCategory[] = [
    {
      inCategoryName: 'Erkek Saat',
    },
    {
      inCategoryName: 'Kadın Saat',
    },
  ];
  categoriesInner9: InnerCategory[] = [
    {
      inCategoryName: 'Bilgisayar',
    },
    {
      inCategoryName: 'Telefon',
    },
  ];
  categoriesInner10: InnerCategory[] = [
    {
      inCategoryName: 'Erkek spor',
    },
    {
      inCategoryName: 'Kadın Spor',
    },
  ];
  constructor() {}
  categories: Categories[];

  ngOnInit() {
    this.categories = [
      {
        id: 1,
        name: 'KADIN',
        inCategoryName: this.categoriesInner1,
      },
      {
        id: 2,
        name: 'ERKEK',
        inCategoryName: this.categoriesInner2,
      },
      {
        id: 3,
        name: 'ÇOCUK',
        inCategoryName: this.categoriesInner3,
      },
      {
        id: 4,
        name: 'EV',
        inCategoryName: this.categoriesInner4,
      },
      {
        id: 5,
        name: 'MARKET',
        inCategoryName: this.categoriesInner5,
      },
      {
        id: 6,
        name: 'KOZMETİK',
        inCategoryName: this.categoriesInner6,
      },
      {
        id: 7,
        name: 'AYAKKABI & ÇANTA',
        inCategoryName: this.categoriesInner7,
      },

      {
        id: 8,
        name: 'SAAT & AKSESUAR',
        inCategoryName: this.categoriesInner8,
      },
      {
        id: 9,
        name: 'ELEKTRONİK',
        inCategoryName: this.categoriesInner9,
      },
      {
        id: 10,
        name: 'SPOR & OUTDOOR',
        inCategoryName: this.categoriesInner10,
      },
    ];
    this.SetNavBar(this.categories);
  }
  SetNavBar(categories: Categories[]) {
    $(document).ready(function () {
      for (let category of categories) {
        $('#categoryUrl' + category.id).html(category.name);
        $('#category' + category.id).hover(
          function () {
            $(this)
              .find('#subNav' + category.id)
              .addClass('animation enable highlight');
          },
          function () {
            $(this)
              .find('#subNav' + category.id)
              .removeClass();
            $(this)
              .find('#subNav' + category.id)
              .addClass('deneme');
          }
        );
      }
      $('#navigation').hover(function(){
        $(this).addClass("highlight");
         $('#maincontent').fadeIn();
      },function(){
        $(this).removeClass("highlight");
        $('#maincontent').fadeOut();
      });
    });
  }
}
