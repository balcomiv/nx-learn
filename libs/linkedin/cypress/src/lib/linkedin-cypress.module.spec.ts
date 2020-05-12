import { async, TestBed } from '@angular/core/testing';
import { LinkedinCypressModule } from './linkedin-cypress.module';

describe('LinkedinCypressModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LinkedinCypressModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LinkedinCypressModule).toBeDefined();
  });
});
