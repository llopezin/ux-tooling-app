import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCardSortingComponent } from './create-card-sorting.component';

describe('CreateCardSortingComponent', () => {
  let component: CreateCardSortingComponent;
  let fixture: ComponentFixture<CreateCardSortingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCardSortingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCardSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
