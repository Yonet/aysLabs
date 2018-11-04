import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArButtonComponent } from './ar-button.component';

describe('ArButtonComponent', () => {
  let component: ArButtonComponent;
  let fixture: ComponentFixture<ArButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
