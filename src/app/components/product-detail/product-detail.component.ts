import { Component, OnInit } from '@angular/core';
import { Product } from './../../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product = new Product();

  constructor() {}

  ngOnInit() {
    this.product.information.ingredients =
      'Nạc vai bò Úc, bánh ướt, húng lủi, húng quế, ngò gai, giá sống, cà chua, hành phi, đậu phộng, nước mắm, đường cát Biên Hòa, giấm nuôi, tỏi lột, mè trắng, bột thịt gà, tiêu đen';
    this.product.information.servingSize = '1 người';
    this.product.information.cookingTime = '15 phút';
    this.product.information.description =
      'Phở cuốn TASTY là món ăn được các đầu bếp TASTY Kitchen dành nhiều thời gian dày công chế biến. Với bánh phở tạo ra từ hạt gạo ngâm suốt 12 tiếng liền, sau đó xay và tráng cách thủy mang đến miếng bánh ướt mỏng, dai dai hoàn toàn tự nhiên. Thêm vào đó là sự kết hợp hài hòa cùng nguyên liệu bò Úc thượng hạng tẩm ướp đậm vị và các loại rau thơm nhiệt đới. Khi thưởng thức kèm nước sốt chấm được pha chế đặc biệt mang đến trải nghiệm ẩm thực tuyệt hảo, đầy thú vị.';
    this.product.information.additionalInformation = 'Thông tin thêm';
  }
}
