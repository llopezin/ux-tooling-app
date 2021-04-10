import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkspaceComponent } from './workspace/workspace.component';
import { AuthGuardService } from './shared/guards/auth-guard.service';


const routes: Routes = [{ path: "", redirectTo: "/user/login", pathMatch: "full" },
{ path: "campaigns",
loadChildren: () => import("./workspace/workspace.module").then((m) => m.WorkspaceModule),
},
{
  path: "user",
  loadChildren: () => import("./user/user.module").then((m) => m.UserModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
