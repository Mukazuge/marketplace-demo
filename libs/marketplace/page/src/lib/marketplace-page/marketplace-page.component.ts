import {Component} from '@angular/core';
import {MarketplaceFacade} from "@tasks/marketplace/data-access";
import {MarketplaceItemModel} from "../../../../data-access/src/lib/models/marketplace-item.model";

@Component({
  selector: 'tasks-marketplace-page',
  templateUrl: './marketplace-page.component.html',
  styleUrls: ['./marketplace-page.component.scss'],
})
export class MarketplacePageComponent {
  marketplace$ = this.facade.marketplace$;
  basket$ = this.facade.clientBasket$;
  client$ = this.facade.getClientShoppingStatus$;
  soldUrl = 'https://indian.com.ar/wp-content/uploads/2018/07/sold-out-png-image.png';

  constructor(
    public facade: MarketplaceFacade
  ) {}

  async addItemToBasket(item: MarketplaceItemModel) {
    this.facade.addItemToBasket(item);
  }
}
