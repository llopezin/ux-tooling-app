import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private url: string;


  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.url = window.location.href
    this.isCampaigns()
  }

  isCampaigns(){
    let splitUrl = this.url.split('/')
    let lastItem = splitUrl[splitUrl.length -1]
    return lastItem === 'campaigns'
  }

}
