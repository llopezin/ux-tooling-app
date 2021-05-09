import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../user/services/user.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserStoreService } from 'src/app/shared/services/user-store.service';
import { AppState } from 'src/app/app.reducers';
import { MyAccountService } from '../../services/my-account.service';

@Component({
  selector: 'app-invite-user',
  templateUrl: './invite-user.component.html',
  styleUrls: ['./invite-user.component.css']
})

export class InviteUserComponent {

  public inviteUserForm: FormGroup;
  public postingInvitation: boolean;
  public invitationPosted: boolean;

  constructor(private fb: FormBuilder, private accountService: MyAccountService, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.inviteUserForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (!this.inviteUserForm.valid) return

    const email = this.inviteUserForm.value.email
    this.postingInvitation = true

    this.accountService.postInvitedUser(email).subscribe(res => { 
      this.postingInvitation = false 
      this.invitationPosted = res.email !== null
      setTimeout(()=>{this.navigateToCampaigns()}, 2000)
    })
  }

  navigateToCampaigns() {
    this.router.navigate([`campaigns`]);
  }

}
