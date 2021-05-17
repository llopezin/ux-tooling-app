import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isCampaigns: boolean;


  constructor(private router: Router) { }

  ngOnInit(): void {

    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.isCampaigns = e.url === "/campaigns"
        console.log('e.url:', e.url)
      }
    });
  }

}



