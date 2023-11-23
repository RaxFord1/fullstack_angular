import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'restaurant-review',
  templateUrl: './restaurant-review.component.html',
  styleUrls: ['./restaurant-review.component.css'],
})
export class ReviewComponent {
  @Input() review: String = '';
}
