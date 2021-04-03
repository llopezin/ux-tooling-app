import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CommonModule } from "@angular/common";
import { LoginComponent } from "./components/login/login.component";
import { NgModule } from "@angular/core";
import { UserRoutingModule } from "./user-routing.module";

@NgModule({
  imports: [CommonModule, FormsModule, UserRoutingModule, ReactiveFormsModule],
  declarations: [LoginComponent],
})
export class UserModule {}
