import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAtLocationComponent } from './display-at-location.component';

describe('DisplayAtLocationComponent', () => {
  let component: DisplayAtLocationComponent;
  let fixture: ComponentFixture<DisplayAtLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAtLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAtLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
