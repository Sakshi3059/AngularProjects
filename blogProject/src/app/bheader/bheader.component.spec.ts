import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BheaderComponent } from './bheader.component';

describe('BheaderComponent', () => {
  let component: BheaderComponent;
  let fixture: ComponentFixture<BheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
