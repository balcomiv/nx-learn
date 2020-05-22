import { async, TestBed } from '@angular/core/testing';
import { MaterialSchematicsModule } from './material-schematics.module';

describe('MaterialSchematicsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialSchematicsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MaterialSchematicsModule).toBeDefined();
  });
});
