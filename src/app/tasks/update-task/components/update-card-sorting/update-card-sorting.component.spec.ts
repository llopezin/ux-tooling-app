import { ComponentFixture, TestBed } from '@angular/core/testing';

import { updateCardSortingComponent } from './update-card-sorting.component';

describe('updateCardSortingComponent', () => {
  let component: updateCardSortingComponent;
  let fixture: ComponentFixture<updateCardSortingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ updateCardSortingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.updateComponent(updateCardSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should update', () => {
    expect(component).toBeTruthy();
  });
});
