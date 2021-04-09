import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { AuthGuardService } from './shared/guards/auth-guard.service';


const routes: Routes = [{ path: "", redirectTo: "/user/login", pathMatch: "full" },
{ path: "campaigns",
loadChildren: () => import("./campaigns/campaigns.module").then((m) => m.CampaignsModule),
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
