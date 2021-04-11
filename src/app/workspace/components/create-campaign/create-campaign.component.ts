import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { createCampaign } from 'src/app/shared/store/workspace-store/workspace.actions';
import { WorkspaceService } from '../../services/workspace.service';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent implements OnInit {

  public newCampaignForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>) { 
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
   const nameObj: {name:String} = this.newCampaignForm.value;
    this.store.dispatch(createCampaign({name: nameObj}))
  }
}
