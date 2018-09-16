import { async, TestBed } from '@angular/core/testing';
import { StateModule } from './state.module';

describe('StateModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StateModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StateModule).toBeDefined();
  });
});
