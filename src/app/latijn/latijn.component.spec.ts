import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatijnComponent } from './latijn.component';

describe('LatijnComponent', () => {
  let component: LatijnComponent;
  let fixture: ComponentFixture<LatijnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatijnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatijnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
