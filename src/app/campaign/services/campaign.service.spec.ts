import { TestBed } from '@angular/core/testing';
import { UserStoreService } from 'src/app/shared/services/user-store.service';

import { CampaignService } from './campaign.service';
import { of } from 'rxjs';
import { Campaign } from '../../dashboard/models/campaign.model';
import { Task } from 'src/app/tasks/create-task/models/task';

describe('CampaignService', () => {
  let service: CampaignService;
  let httpClientSpy: {
    get: jasmine.Spy;
    post: jasmine.Spy;
    put: jasmine.Spy;
    delete: jasmine.Spy;
  };
  let mockCampaigns: Campaign[] = [
    { _id: "1", name: "My campaign" }, { _id: "2", name: "My campaign 2" }
  ]
  let mockTask: Task = { _id: "1", name: "My survey", type: "Survey" }



  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', [
      'get',
      'post',
      'put',
      'delete',
    ]);
    service = new CampaignService(httpClientSpy as any, new UserStoreService);
  });


  it('should return campaigns with given ID', () => {
    httpClientSpy.get.and.returnValue(of(mockCampaigns[0]));

    service
      .getCampaign("1")
      .subscribe(
        (res) => expect(res).toEqual({ _id: "1", name: "My campaign" }, 'mocked campaigns'),
        fail
      );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should create task into campaign', () => {
    httpClientSpy.post.and.returnValue(of(mockCampaigns[0]));

    service
      .addTask("1", mockTask)
      .subscribe((res) => expect(res).toEqual(mockCampaigns[0], 'campaign'), fail);
    expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
  });

  it('should return expected campaign tasks', () => {
    let task_ids = ["1", "2"]
    let taskArr = []
    httpClientSpy.post.and.returnValue(of(taskArr));

    service
      .getCampaignTasks(task_ids)
      .subscribe(
        (res) => expect(res).toEqual(taskArr, 'expected tasks'),
        fail
      );

    expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
  })


});
