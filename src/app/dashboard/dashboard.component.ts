import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { getWorkspace } from '../shared/store/workspace-store/workspace.actions';
import { User } from '../user/models/user';
import { UserService } from '../user/services/user.service';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'app-campaigns',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userService: UserService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('workspaceApp').subscribe(state => {
      if (!state.workspace) this.getWorkspace()
    })
  }

  getWorkspace() {
    this.userService.getProfile().subscribe(() => {
      this.store.dispatch(getWorkspace())
    })
  }

}
