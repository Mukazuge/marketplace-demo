import {Component} from '@angular/core';
import {MarketplaceFacade} from "@tasks/marketplace/data-access";
import {MarketplaceItemModel} from "../../../../data-access/src/lib/models/marketplace-item.model";
import {filter, first, lastValueFrom} from "rxjs";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'tasks-marketplace-basket',
  templateUrl: './marketplace-basket.component.html',
  styleUrls: ['./marketplace-basket.component.scss'],
})
export class MarketplaceBasketComponent {
  dogUrl = 'https://us.123rf.com/450wm/liudmilachernetska/liudmilachernetska2206/liudmilachernetska220606330/liudmilachernetska220606330.jpg?ver=6';
  basket$ = this.facade.clientBasket$;
  getClientShoppingStatus$ = this.facade.getClientShoppingStatus$
  clientTotalBasketPrice$ = this.facade.clientTotalBasketPrice$;
  client$ = this.facade.getClientShoppingStatus$

  constructor(
    public facade: MarketplaceFacade,
    private _toastrService: ToastrService,
    private _router: Router
  ) {
  }

  removeItem(item: MarketplaceItemModel) {
    this.facade.clientRemoveItemToBasket(item);
  }

  async checkout() {
    const client = await lastValueFrom(this.client$.pipe(filter(Boolean), first()));
    const clientTotalBasketPrice = await lastValueFrom(this.clientTotalBasketPrice$.pipe(filter(Boolean), first()));
    if (client.wallet - clientTotalBasketPrice >= 0) {
      this._router.navigate(['checkout']);
    } else {
      this._toastrService.warning('Not enough funds', 'Ups!')
    }
  }
}
