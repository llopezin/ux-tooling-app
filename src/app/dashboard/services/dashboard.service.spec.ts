import { of } from 'rxjs';
import {Dashboard} from '../models/workspace.model';
import { DashboardService } from './dashboard.service';
import { UserStoreService } from 'src/app/shared/services/user-store.service';
import { Campaign } from '../models/campaign.model';

describe('DashBoardService', () => {
let httpClientSpy: {
  get: jasmine.Spy;
  post: jasmine.Spy;
  put: jasmine.Spy;
  delete: jasmine.Spy;
};

let service: DashboardService;

let mockWorkspaces: Dashboard[] = [
  { id: "1", admin_email: 'admin@mock.com' },
  { id: "2", admin_email: 'admin2@mock.com' },
];

let mockCampaigns: Campaign[] = [
  {_id:"1", name: "My campaign"}, {_id:"2", name: "My campaign 2"}
]


beforeEach(() => {
  httpClientSpy = jasmine.createSpyObj('HttpClient', [
    'get',
    'post',
    'put',
    'delete',
  ]);
  service = new DashboardService(httpClientSpy as any, new UserStoreService());
});

it('should return workspace with given ID', () => {
  httpClientSpy.get.and.returnValue(of(mockWorkspaces[0]));

  service
    .getWorkspace()
    .subscribe(
      (res) => expect(res).toEqual({id: "1", admin_email: "admin@mock.com"}, 'mocked workspaces'),
      fail
    );
  expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
});

it('should create a new workspace', () => {
  let newWorkspace = {id: "1", admin_email: "admin@mock.com"}
  let name = "admin@mock.com"
  

  httpClientSpy.post.and.returnValue(of(newWorkspace));

  service
    .create({name})
    .subscribe((workspace) => expect(workspace).toEqual(newWorkspace, 'created workspace'), fail);
  expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
});

it('should return expected campaigns', () => {
  let campaign_ids = ["1", "2"]
  httpClientSpy.post.and.returnValue(of(mockCampaigns));

  service
    .getCampaigns(campaign_ids)
    .subscribe(
      (campaigns) => expect(campaigns).toEqual(mockCampaigns, 'expected camapigns'),
      fail
    );
  expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
})
})