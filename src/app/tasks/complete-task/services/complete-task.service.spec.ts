import { TestBed } from '@angular/core/testing';

import { CompleteTaskService } from './complete-task.service';
import { UserStoreService } from 'src/app/shared/services/user-store.service';
import {of} from 'rxjs';
import { Task } from 'src/app/campaign/models/task.model';

describe('CompleteTaskService', () => {
  let service: CompleteTaskService;
  let httpClientSpy: {
    get: jasmine.Spy;
    post: jasmine.Spy;
    put: jasmine.Spy;
    delete: jasmine.Spy;
  };
  let mockTask:Task = { _id: "1", name: "My survey", type: "Survey", usersRequired: 5, active: true, results: [], completed: false }


  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', [
      'get',
      'post',
      'put',
      'delete',
    ]);
    service = new CompleteTaskService(httpClientSpy as any);
  });

  it('should return task with given ID', () => {
    let _id = "1"
    httpClientSpy.get.and.returnValue(of(mockTask));
  
    service
      .getTask(_id)
      .subscribe(
        (res) => expect(res).toEqual(mockTask, 'expected task'),
        fail
      );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  })

  it('should post response into given task by ID', () => {
    let _id = "1";
    let response = {question: "Mock question?", answer: "yes"}
  
    httpClientSpy.post.and.returnValue(of(mockTask));
  
    service
      .postResponse(_id, response)
      .subscribe((res) => expect(res).toEqual(mockTask, 'task'), fail);
    expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
  });
}); 
