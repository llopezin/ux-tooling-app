import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { getCampaigns } from 'src/app/shared/store/workspace-store/workspace.actions';
import { Campaign } from '../../models/campaign.model';
import { DashboardService } from '../../services/dashboard.service';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-campaigns-list',
  templateUrl: './campaigns-list.component.html',
  styleUrls: ['./campaigns-list.component.css']
})
export class CampaignsListComponent implements OnInit {

  public campaigns: Campaign[];
  public campaign_ids: string[];
  public searchForm: FormGroup;
  public loading: boolean;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>) { }

  ngOnInit(): void {
    this.subscribeToCampaignsStore()
    this.createSearchForm()
  }

  subscribeToCampaignsStore() {
    this.store.select('workspaceApp').subscribe((state) => {
      this.loading = state.loading
      let workspace = state.workspace
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

  createSearchForm() {
    this.searchForm = this.fb.group({
      search: ["", [Validators.required]],
    });
  }

}
