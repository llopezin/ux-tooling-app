import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { getCampaigns } from 'src/app/shared/store/workspace-store/workspace.actions';
import { Campaign } from '../../models/campaign.model';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-campaigns-list',
  templateUrl: './campaigns-list.component.html',
  styleUrls: ['./campaigns-list.component.css']
})
export class CampaignsListComponent implements OnInit {

  public campaigns: Campaign[];
  public campaign_ids: string[];

  constructor(
    private store: Store<AppState>) { }

  ngOnInit(): void {
    this.subscribeToCampaignsStore()
  }

  subscribeToCampaignsStore() {
    this.store.select('workspaceApp').subscribe(({ workspace }) => {
      if (!workspace) return
      this.getCampaigns(workspace)
      this.campaigns = workspace?.campaigns
    })
  }

  getCampaigns(workspace) {
    if (this.campaign_ids != workspace.campaign_ids) {
      this.campaign_ids = workspace.campaign_ids
      this.store.dispatch(getCampaigns({ campaign_ids: this.campaign_ids }))
    }
  }
}
