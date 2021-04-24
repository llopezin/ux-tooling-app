import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSummariesListComponent } from './task-summaries-list.component';

describe('TaskSummariesListComponent', () => {
  let component: TaskSummariesListComponent;
  let fixture: ComponentFixture<TaskSummariesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskSummariesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskSummariesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
