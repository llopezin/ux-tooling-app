import { Component, OnInit } from '@angular/core';
import { Campaign } from '../../models/campaign.model';
import { WorkspaceService } from '../../services/workspace.service';

@Component({
  selector: 'app-campaigns-list',
  templateUrl: './campaigns-list.component.html',
  styleUrls: ['./campaigns-list.component.css']
})
export class CampaignsListComponent implements OnInit {

  public campaigns: Campaign[]

  constructor(private campaingsService: WorkspaceService) { 

  }

  ngOnInit(): void {

  }

}
