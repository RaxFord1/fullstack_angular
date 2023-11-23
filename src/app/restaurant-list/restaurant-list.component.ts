import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Restaurant } from '../restaurant.model';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css'],
})
export class RestaurantListComponent implements OnInit {
  restaurants: Restaurant[];
  constructor(
    private restaurantService: RestaurantService,
    private changeDetector: ChangeDetectorRef
  ) {
    this.restaurants = restaurantService.getRestaurants();
  }

  ngOnInit() {
    console.log(this.restaurants);
    this.restaurantService.restaurants$.subscribe((updatedRestaurants) => {
      this.restaurants = updatedRestaurants;
      this.changeDetector.detectChanges();
      console.log(2, this.restaurants);
    });
  }

  selectedRestaurant: Restaurant | null = null;

  selectRestaurant(restaurant: Restaurant): void {
    if (restaurant == this.selectedRestaurant) {
      this.selectedRestaurant = null;
      return;
    }
    this.selectedRestaurant = null;

    setTimeout(() => {
      this.selectedRestaurant = restaurant;
    }, 0);
  }
}
