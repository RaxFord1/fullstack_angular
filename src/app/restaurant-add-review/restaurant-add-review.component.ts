import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RestaurantService } from '../restaurant.service';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-restaurant-component',
  templateUrl: './restaurant-add-review.component.html',
  styleUrls: ['./restaurant-add-review.component.css'],
  imports: [FormsModule],
  standalone: true,
})
export class RestaurantAddReviewComponent {
  restaurantName: string = '';
  reviewText: string = '';

  constructor(
    private reviewService: ReviewService,
    private restaurantService: RestaurantService
  ) {}

  addReview() {
    const restaurant = this.restaurantService.getRestaurantByName(
      this.restaurantName
    );
    if (restaurant) {
      this.reviewService.addReview(restaurant.name, this.reviewText);
      console.log(
        `Відгук додано для ${this.restaurantName}: ${this.reviewText}`
      );

      this.restaurantName = '';
      this.reviewText = '';
    } else {
      console.log('Ресторан не знайдено.');
    }
  }
}
