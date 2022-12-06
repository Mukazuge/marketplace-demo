import { createAction, props } from '@ngrx/store';
import { MarketplaceEntity } from '../models/marketplace.models';
import {MarketplaceItemModel} from "../models/marketplace-item.model";
import {BuyerData} from "../models/buyer-data.model";

export enum MarketplaceActionTypes {
  setInitialState = '[Marketplace] set initial state',
  loadMarketplace = '[Marketplace] load marketplace',
  loadMarketplaceSuccess = '[Marketplace] load marketplace success',
  loadMarketplaceError = '[Marketplace] load marketplace error',
  sellItems = '[Marketplace] sell item',
  sellItemsSuccess = '[Marketplace] sell item success',
  sellItemsError = '[Marketplace] sell item error',
}

export enum ClientActionTypes {
  setInitialState = '[Client] set initial state',
  clientCheckout = '[Client] client checkout',
  clientCheckoutSuccess = '[Client] client checkout success',
  clientCheckoutError = '[Client] client checkout error',
  clientBuyItems = '[Client] client buy items',
  clientBuyItemsSuccess = '[Client] client buy items success',
  clientBuyItemsError = '[Client] client buy items error',
  clientAddItemToBasket = '[Client] client add item to basket',
  clientRemoveItemToBasket = '[Client] client remove item to basket',
}

export const initMarketplace = createAction(MarketplaceActionTypes.setInitialState);

export const loadMarketplace = createAction(
  MarketplaceActionTypes.loadMarketplace
);

export const loadMarketplaceSuccess = createAction(
  MarketplaceActionTypes.loadMarketplaceSuccess,
  props<{ marketplace: MarketplaceEntity }>()
);

export const loadMarketplaceError = createAction(
  MarketplaceActionTypes.loadMarketplaceError,
  props<{ error: any }>()
);

export const sellItems = createAction(
  MarketplaceActionTypes.sellItems,
);

export const sellItemsSuccess = createAction(
  MarketplaceActionTypes.sellItemsSuccess,
);

export const sellItemsError = createAction(
  MarketplaceActionTypes.sellItemsError,
  props<{ error: any }>()
);

// todo Ideally, this should be on its own files.
export const initClient = createAction(ClientActionTypes.setInitialState);

export const clientCheckout = createAction(
  ClientActionTypes.clientCheckout,
  props<{ newClient: BuyerData }>()
)

export const clientCheckoutSuccess = createAction(
  ClientActionTypes.clientCheckoutSuccess
)

export const clientCheckoutError = createAction(
  ClientActionTypes.clientCheckoutError,
  props<{ error: any }>()
);

export const clientAddItemToBasket = createAction(
  ClientActionTypes.clientAddItemToBasket,
  props<{ item: MarketplaceItemModel  } >()
)

export const clientRemoveItemToBasket = createAction(
  ClientActionTypes.clientRemoveItemToBasket,
  props<{ item: MarketplaceItemModel } >()
)
