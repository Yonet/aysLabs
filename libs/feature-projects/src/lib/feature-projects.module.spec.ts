
import { async, TestBed } from '@angular/core/testing';
import { FeatureProjectsModule } from './feature-projects.module';

describe('FeatureProjectsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FeatureProjectsModule ]
    })
    .compileComponents();
  }));

  it('should create', () => {
    expect(FeatureProjectsModule).toBeDefined();
  });
});
      