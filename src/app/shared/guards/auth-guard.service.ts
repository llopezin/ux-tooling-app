import { CanActivate, Router } from "@angular/router";

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserStoreService } from "../services/user-store.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuardService implements CanActivate {
  constructor(private userStore: UserStoreService, private router: Router) { }

  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (this.userStore.isLoggedIn()) {
      return true;
    }

    this.router.navigate(["user/login"]);

    return false;
  }
}
