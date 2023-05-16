import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-linked-in-post',
  templateUrl: './linked-in-post.component.html',
  styleUrls: ['./linked-in-post.component.scss']
})
export class LinkedInPostComponent {

  constructor(public router: Router) {}

  public get linkedInMessage(): string {
    const base = 'https://www.linkedin.com/sharing/share-offsite/';
    const currentUrl=`?url=www.wizardingworld.com`;

    
    //const currentUrl = `?url=${this.router.url}`;
    return `${base}${currentUrl}`;
  }

}
