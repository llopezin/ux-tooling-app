import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: "", redirectTo: "/user/login", pathMatch: "full" },
{ path: "campaigns",
loadChildren: () => import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
},
{
  path: "user",
  loadChildren: () => import("./user/user.module").then((m) => m.UserModule),
},
{ path: 'campaign/:id', loadChildren: () => import('./campaign/campaign.module').then(m => m.CampaignModule) },
{ path: 'campaign/:id/new-task', loadChildren: () => import('./tasks/create-task/create-task.module').then(m => m.TasksModule) },
{ path: 'results/:id', loadChildren: () => import('./tasks/results/results.module').then(m => m.ResultsModule) },
{ path: 'campaign/:campaign_id/update-task/:task_id', loadChildren: () => import('./tasks/update-task/update-task.module').then(m => m.UpdateTasksModule) },

{ path: 'complete-task/:id', loadChildren: () => import('./tasks/complete-task/complete-task.module').then(m => m.CompleteTaskModule) },
{ path: 'my-account', loadChildren: () => import('./my-account/my-account.module').then(m => m.MyAccountModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
