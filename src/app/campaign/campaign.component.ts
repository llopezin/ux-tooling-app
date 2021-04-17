import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { Campaign } from '../dashboard/models/campaign.model';
import { UserStoreService } from '../shared/services/user-store.service';
import { getCampaigns, getWorkspace } from '../shared/store/workspace-store/workspace.actions';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {
  id: number;
  private sub: any;
  public campaign: Campaign;

  constructor(private route: ActivatedRoute, private store: Store<AppState>, private localStore: UserStoreService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];

      this.store.select('workspaceApp').subscribe(({workspace}) => {
        /* const campaignsExist =  state?.workspace?.campaigns
        campaignsExist ? this.getCampaignFromStore(state.workspace.campaigns) : this.getCampaign() */
        if(workspace?.campaigns) this.getCampaignFromStore(workspace.campaigns)
        if(!workspace){this.store.dispatch(getWorkspace())}
        if(workspace && !workspace.campaigns){this.store.dispatch(getCampaigns({campaign_ids: workspace.campaign_ids}))}
      })
    });
  }

  getCampaign(){
    this.store.dispatch(getWorkspace())
  }

  getCampaignFromStore(campaigns){
    this.campaign = campaigns.find(campaign=>{campaign.id === this.id})
  }
}