import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AblogComponent } from './ablog.component';

describe('AblogComponent', () => {
  let component: AblogComponent;
  let fixture: ComponentFixture<AblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
