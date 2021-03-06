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
  public campaign: Campaign;

  constructor(private route: ActivatedRoute, private store: Store<AppState>, private localStore: UserStoreService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];

     

      this.store.select('workspaceApp').subscribe((state) => {
        const {workspace, loading} = state;

       if(loading) return
       if(workspace?.campaigns) this.getCampaignFromStore(workspace.campaigns)
       if(!workspace){ this.getWorkspace()}
       if(workspace && !workspace.campaigns){this.getCampaigns(workspace)}
      }) 
    });
  }

  getCampaignFromStore(campaigns){
    this.campaign = campaigns.find(campaign=>{return campaign._id == this.id})
  }

  getWorkspace(){
    this.store.dispatch(getWorkspace())
  }

  getCampaigns(workspace){
    this.store.dispatch(getCampaigns({campaign_ids: workspace.campaign_ids}))
  }
}