import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-selection',
  templateUrl: './category-selection.component.html',
  styleUrls: ['./category-selection.component.scss'],
})
export class CategorySelectionComponent implements OnInit {
  categories = [
    'Tất cả',
    'Được yêu thích nhất',
    'Món dùng ngay',
    'Món tráng miệng',
    'Ready to cook',
    'Đồ uống',
    'Combos',
  ];

  constructor() {}

  ngOnInit() {}
}
