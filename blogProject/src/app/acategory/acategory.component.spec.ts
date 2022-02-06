import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcategoryComponent } from './acategory.component';

describe('AcategoryComponent', () => {
  let component: AcategoryComponent;
  let fixture: ComponentFixture<AcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
