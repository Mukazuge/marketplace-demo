import {Component, OnInit} from '@angular/core';
import {MarketplaceFacade} from "@tasks/marketplace/data-access";

@Component({
  selector: 'tasks-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  implements OnInit {
  marketPlace$ = this.facade.marketplace$
  getClientShoppingStatus$ = this.facade.getClientShoppingStatus$

  constructor(public facade: MarketplaceFacade) {
  }

  ngOnInit() {
    this.facade.loadMarketplace();
  }
}
