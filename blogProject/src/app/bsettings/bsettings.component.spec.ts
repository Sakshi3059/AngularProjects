import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsettingsComponent } from './bsettings.component';

describe('BsettingsComponent', () => {
  let component: BsettingsComponent;
  let fixture: ComponentFixture<BsettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
