import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Restaurant } from './restaurant.model';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private restaurantsSource = new BehaviorSubject<Restaurant[]>([]);
  public restaurants$ = this.restaurantsSource.asObservable();

  constructor() {
    this.initRestaurants();
  }

  private initRestaurants() {
    var restaurants = [
      {
        name: 'Ресторан Лісова Пісня',
        cuisine: 'Українська',
        reviews: ['5/5', '2/5'],
      },
      {
        name: 'Морська Зірка',
        cuisine: 'Морепродукти',
        reviews: ['5/5!', '4/5', '3/5'],
      },
      {
        name: 'Гірський Вітер',
        cuisine: 'Європейська',
        reviews: [],
      },
    ];
    restaurants.forEach((restaurant) => {
      this.addRestaurant(restaurant);
    });
  }

  public addRestaurant(newRestaurant: Restaurant) {
    const currentRestaurants = this.restaurantsSource.getValue();
    this.restaurantsSource.next([...currentRestaurants, newRestaurant]);
  }

  public getRestaurants(): Restaurant[] {
    return this.restaurantsSource.getValue();
  }

  public getRestaurantByName(name: string): Restaurant | undefined {
    var restaraunts = this.restaurantsSource.getValue();
    return restaraunts.find((restaurant) => restaurant.name === name);
  }

  public addReview(name: string, review: string) {
    var restaraunts = this.restaurantsSource.getValue();
    var restaurant = restaraunts.find((restaurant) => restaurant.name === name);
    if (restaurant) {
      restaurant.reviews.push(review);
    }
  }
}
