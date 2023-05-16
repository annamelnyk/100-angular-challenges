import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-twitter-post',
  templateUrl: './twitter-post.component.html',
  styleUrls: ['./twitter-post.component.scss'],
})
export class TwitterPostComponent {
  @Input() public baseHref: string = '';
  @Input() public hashTags: string[] = [
    'Angular',
    'Twitter',
    '100AngularChallenges',
    'CodingForFun',
    'MadFinn',
  ];

  constructor(public titleService: Title) {}

  public get twitterUrl(): string {
    const base = this.getBaseWithHashTagsandRoute();
    const message = encodeURIComponent(
      `Check out ${this.titleService.getTitle()} and become a CODING GOD!!!`
    );

    return `${base}${message}`;
  }

  private getBaseWithHashTagsandRoute(): string {
    const route = encodeURI(this.baseHref);
    const hashTags = this.hashTags.join(',');

    const baseWithHashTagsandRoute: string = `https://twitter.com/intent/tweet?hashtags=${encodeURIComponent(
      hashTags
    )}&related=AnnaMelnyk73W&url=${route}&text=`;

    return baseWithHashTagsandRoute;
  }
}
