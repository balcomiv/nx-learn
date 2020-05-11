import { async, TestBed } from '@angular/core/testing';
import { GothinksterAngularDirectivesModule } from './gothinkster-angular-directives.module';

describe('GothinksterAngularDirectivesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GothinksterAngularDirectivesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GothinksterAngularDirectivesModule).toBeDefined();
  });
});
