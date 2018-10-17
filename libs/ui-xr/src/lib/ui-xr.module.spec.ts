import { async, TestBed } from '@angular/core/testing';
import { UiXrModule } from './ui-xr.module';

describe('UiXrModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiXrModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiXrModule).toBeDefined();
  });
});
