import { async, TestBed } from '@angular/core/testing';
import { GothinksterReactiveFormsModule } from './gothinkster-reactive-forms.module';

describe('GothinksterReactiveFormsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GothinksterReactiveFormsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GothinksterReactiveFormsModule).toBeDefined();
  });
});
