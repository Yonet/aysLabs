import { async, TestBed } from '@angular/core/testing';
import { FeatureProjectDetailModule } from './feature-project-detail.module';

describe('FeatureProjectDetailModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureProjectDetailModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureProjectDetailModule).toBeDefined();
  });
});
