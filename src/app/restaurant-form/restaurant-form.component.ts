import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css'],
})
export class RestaurantFormComponent implements OnInit {
  restaurantForm: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit() {
    this.restaurantForm = this.formBuilder.group({
      name: ['', Validators.required],
      cuisine: ['', Validators.required],
      reviews: this.formBuilder.array([]),
    });
  }

  get reviews() {
    return this.restaurantForm.get('reviews') as FormArray;
  }

  addReview() {
    this.reviews.push(this.formBuilder.control(''));
  }

  onSubmit() {
    if (this.restaurantForm.valid) {
      console.log(this.restaurantForm.value);
      this.restaurantService.addRestaurant(this.restaurantForm.value);
      this.restaurantForm.reset();
    }
    console.log(this.restaurantService.getRestaurants());
  }
}
