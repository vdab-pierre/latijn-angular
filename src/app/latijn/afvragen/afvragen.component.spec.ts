import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfvragenComponent } from './afvragen.component';

describe('AfvragenComponent', () => {
  let component: AfvragenComponent;
  let fixture: ComponentFixture<AfvragenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfvragenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfvragenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
