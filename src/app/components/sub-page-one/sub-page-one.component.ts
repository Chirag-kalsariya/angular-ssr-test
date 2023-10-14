import { Component } from '@angular/core';
import { Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-sub-page-one',
  templateUrl: './sub-page-one.component.html',
  styleUrls: ['./sub-page-one.component.sass']
})
export class SubPageOneComponent {

  constructor(
    private meta: Meta
  ) {

  }

  ngOnInit() {
    const metaData: MetaDefinition[] = [
      { name: 'description', content: 'This is the sub page one description.' },
      { property: 'og:title', content: 'This is the sub page one title' },
    ];

    this.meta.addTags(metaData);
  }

}
