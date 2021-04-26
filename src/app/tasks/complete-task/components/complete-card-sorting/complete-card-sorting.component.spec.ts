import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteCardSortingComponent } from './complete-card-sorting.component';

describe('CompleteCardSortingComponent', () => {
  let component: CompleteCardSortingComponent;
  let fixture: ComponentFixture<CompleteCardSortingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteCardSortingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteCardSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
