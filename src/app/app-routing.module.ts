import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { AuthGuardService } from './shared/guards/auth-guard.service';


const routes: Routes = [{ path: "", redirectTo: "/campaigns", pathMatch: "full" },
{ path: "campaigns", component: CampaignsComponent, canActivate: [AuthGuardService], },
{
  path: "user",
  loadChildren: () => import("./user/user.module").then((m) => m.UserModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
