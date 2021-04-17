import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducers';
import { UserStoreService } from './shared/services/user-store.service';
import { browserTokenLogin } from './shared/store/user-store/user.actions';
import { User } from './user/models/user';

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

  constructor(private userStoreService: UserStoreService, private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.checkLocalForLoginToken()
    this.subcribeToLoginChanges()
  }

  checkLocalForLoginToken() {
    if (this.userStoreService.isLoggedIn()) { 
      this.store.dispatch(browserTokenLogin()) 
    }
  }

  subcribeToLoginChanges() {
    this.store
      .select('usersApp').subscribe((res) => {
        this.userIsLoggedIn = res.userIsLoggedIn
      })
  }
}
