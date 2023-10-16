import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.sass']
})
export class HomeScreenComponent {

  metaTagTitle: string = '';
  metaTagDesc: string = '';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private meta: Meta,
  ) {

  }

  ngOnInit() {
    const isServer = !isPlatformBrowser(this.platformId);
    if (!isServer) {
      this.getMetaTag();
    }
  }

  getMetaTag() {
    setTimeout(() => {
      this.metaTagTitle = 'This is the home screen description.';
      this.metaTagDesc = 'This is the home screen title';
      this.setMetaTag();
    }, 5000);
  }

  setMetaTag() {
    console.log("Hello again");
    const metaData: MetaDefinition[] = [
      { name: 'description', content: this.metaTagTitle },
      { property: 'og:title', content: this.metaTagDesc },
    ];

    this.meta.addTags(metaData);
  }
}
