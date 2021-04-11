import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { getCampaigns } from 'src/app/shared/store/workspace-store/workspace.actions';
import { Campaign } from '../../models/campaign.model';
import { WorkspaceService } from '../../services/workspace.service';

@Component({
  selector: 'app-campaigns-list',
  templateUrl: './campaigns-list.component.html',
  styleUrls: ['./campaigns-list.component.css']
})
export class CampaignsListComponent implements OnInit {

  public campaigns: Campaign[];
  public campaign_ids: string[];

  constructor(
    private store: Store<AppState>,
    private workspaceService: WorkspaceService) { }

  ngOnInit(): void {
    this.store.select('workspaceApp').subscribe(( {workspace} ) => {
      this.getCampaigns(workspace)
      this.campaigns = workspace?.campaigns
    })
  }

  getCampaigns(workspace) {
    if (!workspace) return
    if (this.campaign_ids != workspace.campaign_ids) {
      this.campaign_ids = workspace.campaign_ids
      this.store.dispatch(getCampaigns({ campaign_ids: this.campaign_ids }))
    }
  }
}
