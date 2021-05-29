import { TestBed } from '@angular/core/testing';

import { CreateTaskService } from './create-task.service';

describe('CreateTaskService', () => {
  let service: CreateTaskService;
  let httpClientSpy: {
    get: jasmine.Spy;
    post: jasmine.Spy;
    put: jasmine.Spy;
    delete: jasmine.Spy;
  };


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new CreateTaskService(httpClientSpy as any);
    httpClientSpy = jasmine.createSpyObj('HttpClient', [
      'get',
      'post',
      'put',
      'delete',
    ]);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
