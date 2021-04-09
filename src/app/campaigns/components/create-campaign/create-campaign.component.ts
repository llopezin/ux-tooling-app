import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CampaignsService } from '../../services/campaigns.service';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent implements OnInit {

  public newCampaignForm: FormGroup;

  constructor(private fb: FormBuilder, private campaignService: CampaignsService) { 
  this.createForm()
  }

  ngOnInit(): void {
  } 

  createForm() {
    this.newCampaignForm = this.fb.group({
      name: ["", [Validators.required]],
    });
  }

  onSubmit(){
   const nameObj = this.newCampaignForm.value;
    this.campaignService.create(nameObj).subscribe((res)=>{
      console.log(res);
      
    })
  }
}
