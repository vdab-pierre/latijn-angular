import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoordenLerenComponent } from './woorden-leren.component';

describe('WoordenLerenComponent', () => {
  let component: WoordenLerenComponent;
  let fixture: ComponentFixture<WoordenLerenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoordenLerenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoordenLerenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
