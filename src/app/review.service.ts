import { Injectable } from '@angular/core';
import { RestaurantService } from './restaurant.service';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(private restaurantService: RestaurantService) {}

  addReview(restaurantId: string, review: string) {
    this.restaurantService.addReview(restaurantId, review);
  }

  calculateAverageRating(name: string): number {
    var restaurant = this.restaurantService.getRestaurantByName(name);
    if (!restaurant) {
      return 0;
    }
    const reviews = restaurant.reviews;
    if (!reviews.length) return 0;

    const totalRating = reviews.reduce((acc, review) => {
      const rating = parseInt(review.split('/')[0]);
      return acc + rating;
    }, 0);

    return totalRating / reviews.length;
  }
}
