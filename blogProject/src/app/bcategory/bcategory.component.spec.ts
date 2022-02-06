import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcategoryComponent } from './bcategory.component';

describe('BcategoryComponent', () => {
  let component: BcategoryComponent;
  let fixture: ComponentFixture<BcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
