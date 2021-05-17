import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducers';
import { UserStoreService } from './shared/services/user-store.service';
import { browserTokenLogin } from './shared/store/user-store/user.actions';
import { User } from './user/models/user';
import { NavigationEnd, Router } from '@angular/router';
import { getWorkspace } from './shared/store/workspace-store/workspace.actions';
import { UserService } from './user/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ux-tooling-app';

  public userIsStored: boolean;
  public userhasLoggedIn: boolean;
  public userIsLoggedIn: boolean;
  public isCompleteTask: boolean

  constructor(
    private userStoreService: UserStoreService,
    private store: Store<AppState>,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subscribeToRouterChanges()
    this.subscribeToStore()
  }

  subscribeToStore() {
    this.store
      .select('usersApp').subscribe((res) => {
        this.userIsLoggedIn = res.userIsLoggedIn
        if (!this.userIsLoggedIn) this.checkLocalForLoginToken()
        if(this.userIsLoggedIn) this.getWorkspace()
      })
  }

  checkLocalForLoginToken() {
    if (this.userStoreService.isLoggedIn()) {
      this.store.dispatch(browserTokenLogin())
    }
  }

  subscribeToRouterChanges() {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.isCompleteTask = e.url.indexOf("/complete-task") > -1
      }
    });
  }

  getWorkspace() {
    this.userService.getProfile().subscribe(() => {
      this.store.dispatch(getWorkspace())
    })
  }


}