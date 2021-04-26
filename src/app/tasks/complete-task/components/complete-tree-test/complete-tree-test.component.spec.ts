import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteTreeTestComponent } from './complete-tree-test.component';

describe('CompleteTreeTestComponent', () => {
  let component: CompleteTreeTestComponent;
  let fixture: ComponentFixture<CompleteTreeTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteTreeTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteTreeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
