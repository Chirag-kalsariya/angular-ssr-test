import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPageOneComponent } from './sub-page-one.component';

describe('SubPageOneComponent', () => {
  let component: SubPageOneComponent;
  let fixture: ComponentFixture<SubPageOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubPageOneComponent]
    });
    fixture = TestBed.createComponent(SubPageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
