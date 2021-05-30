import { updateTaskService } from './update-task.service';
import {UserStoreService} from 'src/app/shared/services/user-store.service';
import {of} from 'rxjs';
import {Task} from 'src/app/campaign/models/task.model';

describe('updateTaskService', () => {
  let service: updateTaskService;
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
    service = new updateTaskService(httpClientSpy as any, new UserStoreService);
  });

  it('should update task', () => {
    let campaign_id = "1"

    httpClientSpy.put.and.returnValue(of(mockTask));

    service
      .updateTask(campaign_id, mockTask)
      .subscribe((res) => expect(res).toEqual(mockTask, 'task'), fail);
    expect(httpClientSpy.put.calls.count()).toBe(1, 'one call');
  });


});
