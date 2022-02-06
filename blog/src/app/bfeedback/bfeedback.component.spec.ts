import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BfeedbackComponent } from './bfeedback.component';

describe('BfeedbackComponent', () => {
  let component: BfeedbackComponent;
  let fixture: ComponentFixture<BfeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BfeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
