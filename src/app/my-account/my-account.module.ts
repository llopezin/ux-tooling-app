import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InviteUserComponent } from './components/invite-user/invite-user.component';
import { MyAccountComponent } from './my-account.component';
import {MyAccountRoutingModule} from './my-account-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyAccountService } from './services/my-account.service';



@NgModule({
  declarations: [InviteUserComponent, MyAccountComponent],
  imports: [
    CommonModule, MyAccountRoutingModule, FormsModule, ReactiveFormsModule
  ],
  providers: [MyAccountService]
})
export class MyAccountModule { }
