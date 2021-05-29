import { TestBed } from '@angular/core/testing';

import { CompleteTaskService } from './complete-task.service';
import { UserStoreService } from 'src/app/shared/services/user-store.service';

describe('CompleteTaskService', () => {
  let service: CompleteTaskService;
  let httpClientSpy: {
    get: jasmine.Spy;
    post: jasmine.Spy;
    put: jasmine.Spy;
    delete: jasmine.Spy;
  };


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new CompleteTaskService(httpClientSpy as any);
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
