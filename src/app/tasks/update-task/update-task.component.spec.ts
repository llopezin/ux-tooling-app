import { ComponentFixture, TestBed } from '@angular/core/testing';

import { updateTaskComponent } from './update-task.component';

describe('updateTaskComponent', () => {
  let component: updateTaskComponent;
  let fixture: ComponentFixture<updateTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ updateTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.updateComponent(updateTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should update', () => {
    expect(component).toBeTruthy();
  });
});
