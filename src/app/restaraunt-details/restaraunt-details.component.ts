import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { fadeInOut } from '../animations';
import { Restaurant } from '../restaurant.model';

@Component({
  selector: 'app-restaraunt-details',
  templateUrl: './restaraunt-details.component.html',
  styleUrls: ['./restaraunt-details.component.css'],
  animations: [fadeInOut],
})
export class RestarauntDetailsComponent implements OnChanges {
  @Input() restaurant: Restaurant | null = null;
  showDetails: boolean = false;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['restaurant']) {
      this.resetAnimation();
    }
  }

  private resetAnimation() {
    this.showDetails = false;
    setTimeout(() => {
      this.showDetails = true;
    }, 0);
  }
}
