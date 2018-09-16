import { async, TestBed } from '@angular/core/testing';
import { FeatureUserModule } from './feature-user.module';

describe('FeatureUserModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureUserModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureUserModule).toBeDefined();
  });
});
