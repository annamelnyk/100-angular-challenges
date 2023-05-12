import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent {
  @Input() public rating: number = 0;

  public get fullStars(): number[] {
    const totalFullStars = Math.floor(this.rating);

    return Array(totalFullStars).fill(0);
  }

  public get emptyStars(): number[] {
    const highestRating = 5;
    const totalEmptyStars = Math.floor(highestRating - this.rating);

    return Array(totalEmptyStars).fill(0);
  }

  public get hasHalfStar(): boolean {
    return this.fullStars.length % this.rating !== 0;
  }
}
