import { TestBed } from '@angular/core/testing';

import { updateTaskService } from './update-task.service';
import {UserStoreService} from 'src/app/shared/services/user-store.service';

describe('updateTaskService', () => {
  let service: updateTaskService;
  let httpClientSpy: {
    get: jasmine.Spy;
    post: jasmine.Spy;
    put: jasmine.Spy;
    delete: jasmine.Spy;
  };


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new updateTaskService(httpClientSpy as any, new UserStoreService);
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
