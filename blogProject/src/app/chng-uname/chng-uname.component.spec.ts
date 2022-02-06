import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChngUnameComponent } from './chng-uname.component';

describe('ChngUnameComponent', () => {
  let component: ChngUnameComponent;
  let fixture: ComponentFixture<ChngUnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChngUnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChngUnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
