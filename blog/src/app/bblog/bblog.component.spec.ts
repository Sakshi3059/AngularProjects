import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BblogComponent } from './bblog.component';

describe('BblogComponent', () => {
  let component: BblogComponent;
  let fixture: ComponentFixture<BblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
