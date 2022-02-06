import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcatComponent } from './bcat.component';

describe('BcatComponent', () => {
  let component: BcatComponent;
  let fixture: ComponentFixture<BcatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BcatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
