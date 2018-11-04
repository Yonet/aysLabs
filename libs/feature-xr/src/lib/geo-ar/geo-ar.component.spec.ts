import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoArComponent } from './geo-ar.component';

describe('GeoArComponent', () => {
  let component: GeoArComponent;
  let fixture: ComponentFixture<GeoArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
