import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatijnWoordenLerenComponent } from './latijn-woorden-leren.component';

describe('LatijnWoordenLerenComponent', () => {
  let component: LatijnWoordenLerenComponent;
  let fixture: ComponentFixture<LatijnWoordenLerenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatijnWoordenLerenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatijnWoordenLerenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
