import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-favored-products',
  templateUrl: './favored-products.component.html',
  styleUrls: ['./favored-products.component.scss'],
})
export class FavoredProductsComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: !0,
    dots: !0,
    nav: !1,
    autoplay: true,
    autoplayTimeout: 5e3,
    autoplayHoverPause: !0,
    items: 1,
    margin: 40,
    navSpeed: 1000,
    responsive: {
      0: {
        stagePadding: 0,
        items: 1,
        margin: 20,
      },
      1000: {
        items: 3,
        margin: 30,
      },
    },
  };

  constructor() {}

  ngOnInit() {}
}
