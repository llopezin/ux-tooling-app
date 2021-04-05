import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from './user/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ux-tooling-app';

  public userIsLoggedIn: boolean;

  constructor(private store: Store<{ user: any }>
  ) { }

  ngOnInit(): void {
    this.store.select('user').subscribe(res => { this.userIsLoggedIn = res.userIsLoggedIn })
  }
}
