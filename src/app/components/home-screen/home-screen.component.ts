import { Component } from '@angular/core';
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
    private meta: Meta
  ) {

  }

  ngOnInit() {
    this.getMetaTag();
  }

  getMetaTag() {
    setTimeout(() => {
      this.metaTagTitle = 'This is the home screen description.';
      this.metaTagDesc = 'This is the home screen title';
      this.setMetaTag();
    }, 5000);
  }

  setMetaTag() {
    const metaData: MetaDefinition[] = [
      { name: 'description', content: this.metaTagTitle },
      { property: 'og:title', content: this.metaTagDesc },
    ];

    this.meta.addTags(metaData);
  }
}
