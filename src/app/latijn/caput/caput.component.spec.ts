import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaputComponent } from './caput.component';

describe('CaputComponent', () => {
  let component: CaputComponent;
  let fixture: ComponentFixture<CaputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
