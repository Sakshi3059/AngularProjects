import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhomeComponent } from './bhome.component';

describe('BhomeComponent', () => {
  let component: BhomeComponent;
  let fixture: ComponentFixture<BhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
