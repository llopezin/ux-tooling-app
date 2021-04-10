import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
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

  constructor(private userStoreService: UserStoreService, private store: Store<{ user: any }>
  ) { }

  ngOnInit(): void {
    this.checkLocalForLoginToken()
    if(this.userIsStored){this.store.dispatch(browserTokenLogin())}
    this.subcribeToLoginChanges()
    this.userIsLoggedIn = this.userIsStored || this.userhasLoggedIn
  }

  checkLocalForLoginToken() {
    this.userIsStored = this.userStoreService.isLoggedIn()
  }

  subcribeToLoginChanges() {
    this.store.select('user').subscribe((res)=>{
      this.userhasLoggedIn = res.userIsLoggedIn
    })
  }
}
