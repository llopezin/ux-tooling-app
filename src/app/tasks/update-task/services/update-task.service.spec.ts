import { TestBed } from '@angular/core/testing';

import { updateTaskService } from './update-task.service';

describe('updateTaskService', () => {
  let service: updateTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(updateTaskService);
  });

  it('should be updated', () => {
    expect(service).toBeTruthy();
  });
});
