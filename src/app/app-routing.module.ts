import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './shared/guards/auth-guard.service';


const routes: Routes = [{ path: "", redirectTo: "/user/login", pathMatch: "full" },
{ path: "campaigns",
loadChildren: () => import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
},
{
  path: "user",
  loadChildren: () => import("./user/user.module").then((m) => m.UserModule),
},
{ path: 'campaign/:id', loadChildren: () => import('./campaign/campaign.module').then(m => m.CampaignModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
