import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmokeTestComponent } from './smoke-test.component';

describe('SmokeTestComponent', () => {
  let component: SmokeTestComponent;
  let fixture: ComponentFixture<SmokeTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmokeTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmokeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
