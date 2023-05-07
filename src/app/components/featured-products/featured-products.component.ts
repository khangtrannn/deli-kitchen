import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss'],
})
export class FeaturedProductsComponent implements OnInit {
  @Input() title: string | undefined;

  customOptions: OwlOptions = {
    loop: !0,
    dots: !0,
    nav: !1,
    autoplay: true,
    autoplayTimeout: 5e3,
    autoplayHoverPause: !0,
    stagePadding: 300,
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
        stagePadding: 100,
        items: 2,
        margin: 30,
        dots: !1,
      },
      1600: {
        stagePadding: 180,
        items: 2,
        margin: 40,
        dots: !1,
      },
      1900: {
        stagePadding: 211.5,
        items: 2,
        margin: 40,
        dots: !1,
      },
    },
  };

  constructor() {}

  ngOnInit() {}
}
