import { TestBed } from '@angular/core/testing';
import { UserStoreService } from 'src/app/shared/services/user-store.service';

import { of } from 'rxjs';
import { Campaign } from '../../dashboard/models/campaign.model';
import { Task } from 'src/app/tasks/create-task/models/task';
import { UserService } from './user.service';

describe('UserService', () => {
    let httpClientSpy: {
        get: jasmine.Spy;
        post: jasmine.Spy;
        put: jasmine.Spy;
        delete: jasmine.Spy;
    };
    let service: UserService;
    let mockToken = "123";
    let mockUser = {
        email: "user@mockToken.com",
        password: "pass123",
    }
    let mockProfil = {
        email: "user@mockToken.com",
        workspace_id: "1",
    }




    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', [
            'get',
            'post',
            'put',
            'delete',
        ]);
        service = new UserService(httpClientSpy as any, new UserStoreService);
    });


    it('should return token on login', () => {
        httpClientSpy.post.and.returnValue(of(mockToken));

        service
            .login(mockUser)
            .subscribe(
                (res) => expect(res).toEqual(mockToken, 'login token'),
                fail
            );
        expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
    });

    it('should register a new user', () => {
        httpClientSpy.post.and.returnValue(of(mockToken));

        service
            .register(mockUser)
            .subscribe(
                (res) => expect(res).toEqual(mockToken, 'login token'),
                fail
            );

        expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
    });


    it('should get user profile', () => {
        httpClientSpy.get.and.returnValue(of(mockProfil));

        service
            .getProfile()
            .subscribe(
                (res) => expect(res).toEqual(mockProfil, 'profile'),
                fail
            );

        expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });




});
