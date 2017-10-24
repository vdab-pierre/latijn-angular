import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRfComponent } from './test-rf.component';

describe('TestRfComponent', () => {
  let component: TestRfComponent;
  let fixture: ComponentFixture<TestRfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
