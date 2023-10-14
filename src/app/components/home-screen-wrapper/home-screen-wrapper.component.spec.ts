import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeScreenWrapperComponent } from './home-screen-wrapper.component';

describe('HomeScreenWrapperComponent', () => {
  let component: HomeScreenWrapperComponent;
  let fixture: ComponentFixture<HomeScreenWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeScreenWrapperComponent]
    });
    fixture = TestBed.createComponent(HomeScreenWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
