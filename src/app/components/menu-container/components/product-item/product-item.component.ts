import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  imageUrl!: string;
  outOfStock = false;

  constructor() {}

  ngOnInit() {
    this.imageUrl = this.getImageUrl();
  }

  getImageUrl(): string {
    const images = [
      'https://img.tastykitchen.vn/crop/480x375/2021/01/25/pho-cuon-hn-1280x1000-7020.jpg',
      'https://img.tastykitchen.vn/crop/820x642/2021/12/27/com-chien-la-cam-aee6.jpg',
      'https://img.tastykitchen.vn/2021/06/03/18-salad-rau-mua-3-fea4.jpg',
      'https://img.tastykitchen.vn/crop/820x642/2021/03/04/ga-cuon-la-dua-1280x1000-628f.jpg',
      'https://img.tastykitchen.vn/crop/820x642/2022/03/28/com-suon-nuong-afed.jpg',
      'https://img.tastykitchen.vn/crop/820x642/2020/10/14/com-chien-1280x1000-min-4d48.jpg',
    ];

    return images[Math.floor(Math.random() * images.length)];
  }
}
