import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChngPwdComponent } from './chng-pwd.component';

describe('ChngPwdComponent', () => {
  let component: ChngPwdComponent;
  let fixture: ComponentFixture<ChngPwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChngPwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChngPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
