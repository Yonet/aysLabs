import { async, TestBed } from '@angular/core/testing';
import { LibsUiBabylonModule } from './ui-babylon.module';

describe('LibsUiBabylonModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LibsUiBabylonModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LibsUiBabylonModule).toBeDefined();
  });
});
