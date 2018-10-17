import { async, TestBed } from '@angular/core/testing';
import { FeatureXrModule } from './feature-xr.module';

describe('FeatureXrModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureXrModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureXrModule).toBeDefined();
  });
});
