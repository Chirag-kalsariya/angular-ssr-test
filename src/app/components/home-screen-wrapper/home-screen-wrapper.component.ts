import { Component } from '@angular/core';
import { Meta, MetaDefinition } from '@angular/platform-browser';
import { SeoServiceService } from 'src/app/services/seo-service.service';

@Component({
  selector: 'app-home-screen-wrapper',
  templateUrl: './home-screen-wrapper.component.html',
  styleUrls: ['./home-screen-wrapper.component.sass']
})
export class HomeScreenWrapperComponent {

  metaTagTitle: string = '';
  metaTagDesc: string = '';

  constructor(
    public seoserviceService: SeoServiceService,
    private meta: Meta
  ) {

  }

  ngOnInit() {
    this.getMetaTag();
  }

  getMetaTag() {
    this.metaTagTitle = 'This is the home screen description.';
    this.metaTagDesc = 'This is the home screen title';
    this.setMetaTag();
  }

  setMetaTag() {
    const metaData: MetaDefinition[] = [
      { name: 'description', content: this.metaTagTitle },
      { property: 'og:title', content: this.metaTagDesc },
    ];

    this.meta.addTags(metaData);
    this.seoserviceService.isLoading = false;
  }

}
