import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { getWorkspace } from '../shared/store/workspace-store/workspace.actions';
import { User } from '../user/models/user';
import { UserService } from '../user/services/user.service';
import { WorkspaceService } from './services/workspace.service';

@Component({
  selector: 'app-campaigns',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

  constructor(private userService: UserService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.userService.getProfile().subscribe(() => {
      this.store.dispatch(getWorkspace())
    })
  }

}
