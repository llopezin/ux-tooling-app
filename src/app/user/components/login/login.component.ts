import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Component } from "@angular/core";
import { UserService } from "../../services/user.service";
import { Login } from "../../models/login";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  public message = "";
  public loginForm: FormGroup;
  public action;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    const passwordHasValidLength = this.loginForm.get('password').errors?.minlength === undefined

    //Show invalid password length message only if user is signing up
    if (!passwordHasValidLength) {
      this.message = this.action === 'register' ? "Password is too short" : "Invalid Credentials"
      return
    }

    this.message = ""

    if (this.action === 'login') this.login();
    if (this.action === 'register') this.register()
  }

  login() {
    const login: Login = this.loginForm.value;
    this.userService.login(login).subscribe(
      (resp) => {
        //this.message = resp.msg;
        this.message = "Logged in";
        this.router.navigate(["campaigns"])
      },
      (err) => {
        //this.message = err.error.msg;
        this.message = "Log in error";
      }
    );
  }

  register() {
    const register: Login = this.loginForm.value;
    this.userService.register(register).subscribe(
      (response) => {
        this.message = "Successfully registered";
      },
      (err) => {
        this.message = err.error.error || "Registration error";
      }
    );
  }
}
