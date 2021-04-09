import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { Login } from "../../models/login";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { User } from "../../models/user";
import { login, register } from "../../../shared/store/user-store/user.actions"


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  public message = "";
  public loginForm: FormGroup;
  public action;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private store: Store<{ user: any }>
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.store.select('user').subscribe(res => { 
      console.log('res:', res)
      if(res.userIsLoggedIn) this.router.navigate(['campaigns']) 
      if(res.error) this.message = "Invalid credentials";

     })
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
    this.message = ""
    const userDetails: Login = this.loginForm.value;
    this.store.dispatch(login({ userDetails: userDetails }))
  }

  register() {
    const register: Login = this.loginForm.value;
    this.userService.register(register).subscribe(
      (res) => {
        this.message = "Successfully registered";
      },
      (err) => {
        this.message = err.error.error || "Registration error";
      }
    );
  }
}
