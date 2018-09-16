import { async, TestBed } from '@angular/core/testing';
import { UtilsModule } from './utils.module';

describe('UtilsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UtilsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UtilsModule).toBeDefined();
  });
});
