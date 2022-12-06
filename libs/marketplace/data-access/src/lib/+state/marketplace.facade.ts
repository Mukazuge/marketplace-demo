import { Injectable, inject } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as MarketplaceActions from './marketplace.actions';
import * as MarketplaceFeature from './marketplace.reducer';
import * as MarketplaceSelectors from './marketplace.selectors';
import {getClientBasket, getClientShoppingStatus, getMarketplaceEntities} from "./marketplace.selectors";
import {MarketplaceItemModel} from "../models/marketplace-item.model";
import {clientRemoveItemToBasket} from "./marketplace.actions";
import {BuyerData} from "../models/buyer-data.model";

@Injectable()
export class MarketplaceFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(MarketplaceSelectors.getMarketplaceLoaded));
  marketplace$ = this.store.pipe(
    select(MarketplaceSelectors.getMarketplace)
  );
  getClientShoppingStatus$ = this.store.pipe(
    select(MarketplaceSelectors.getClientShoppingStatus)
  );
  clientBasket$ = this.store.pipe(
    select(MarketplaceSelectors.getClientBasket)
  );

  clientTotalBasketPrice$ = this.store.pipe(
    select(MarketplaceSelectors.clientTotalBasketPrice)
  );

  public checkout(newClient: BuyerData) {
    this.store.dispatch(MarketplaceActions.clientCheckout({ newClient }));
  }

  public sellItems() {
    this.store.dispatch(MarketplaceActions.sellItems());
  }

  public clientRemoveItemToBasket(item: MarketplaceItemModel) {
    this.store.dispatch(MarketplaceActions.clientRemoveItemToBasket({item}));
  }

  public loadMarketplace() {
    this.store.dispatch(MarketplaceActions.loadMarketplace())
  }

  public addItemToBasket(item: MarketplaceItemModel) {
    this.store.dispatch(MarketplaceActions.clientAddItemToBasket({item}));
  }

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(MarketplaceActions.initMarketplace());
  }
}
