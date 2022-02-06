import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdashbComponent } from './adashb.component';

describe('AdashbComponent', () => {
  let component: AdashbComponent;
  let fixture: ComponentFixture<AdashbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdashbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdashbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
