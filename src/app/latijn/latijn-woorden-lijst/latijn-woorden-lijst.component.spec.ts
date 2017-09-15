import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatijnWoordenLijstComponent } from './latijn-woorden-lijst.component';

describe('LatijnWoordenLijstComponent', () => {
  let component: LatijnWoordenLijstComponent;
  let fixture: ComponentFixture<LatijnWoordenLijstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatijnWoordenLijstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatijnWoordenLijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
