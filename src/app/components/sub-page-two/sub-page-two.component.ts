import { Component } from '@angular/core';
import { Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-sub-page-two',
  templateUrl: './sub-page-two.component.html',
  styleUrls: ['./sub-page-two.component.sass']
})

export class SubPageTwoComponent {

  constructor(
    private meta: Meta
  ) {

  }

  ngOnInit() {
    const metaData: MetaDefinition[] = [
      { name: 'description', content: 'This is the sub page two description.' },
      { property: 'og:title', content: 'This is the sub page two title' },
    ];

    this.meta.addTags(metaData);
  }

}
