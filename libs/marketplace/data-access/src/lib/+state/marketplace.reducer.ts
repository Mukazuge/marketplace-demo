import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as MarketplaceActions from './marketplace.actions';
import { MarketplaceEntity } from '../models/marketplace.models';
import {ClientModel} from "../models/client.model";
import {MarketplaceItemModel} from "../models/marketplace-item.model";

export const MARKETPLACE_FEATURE_KEY = 'marketplace';

export interface MarketplaceState extends EntityState<MarketplaceEntity> {
  marketplace: MarketplaceEntity;
  client: ClientModel, // ideally, this should have its own set of files (reducer, action, selector...).
  loaded?: boolean; // has the Marketplace list been loaded
  error?: string | null; // last known error (if any)
}

export interface MarketplacePartialState {
  readonly [MARKETPLACE_FEATURE_KEY]: MarketplaceState;
}

export const marketplaceAdapter: EntityAdapter<MarketplaceEntity> =
  createEntityAdapter<MarketplaceEntity>();

export const initialMarketplaceState: MarketplaceState =
  marketplaceAdapter.getInitialState({
    // set initial required properties
    loaded: false,
    marketplace: {
      items: [],
      name: ''
    },
    client: {
      basket: [],
      wallet: 120,
      buyerData: null,
    },
    error: null,
  });

const reducer = createReducer(
  initialMarketplaceState,
  // marketplace store
  on(MarketplaceActions.initMarketplace, () => ({
    ...initialMarketplaceState
  })),
  on(MarketplaceActions.loadMarketplace, (state) => ({
    ...state,
    loaded: false,
  })),
  on(MarketplaceActions.loadMarketplaceSuccess, (state, { marketplace }) => ({
    ...state,
    marketplace: marketplace,
    loaded: true,
  })),
  on(MarketplaceActions.loadMarketplaceError, (state, { error }) => ({
    ...state,
    loaded: true,
    error,
  })),

  // client
  on(MarketplaceActions.initClient, (state) => ({
    ...state,
    client: {
      basket: [],
      wallet: 120,
      buyerData: null,
    }
  })),
  on(MarketplaceActions.clientAddItemToBasket, (state, { item }) => {
    const modifiedItemIndex: number = state.marketplace.items.findIndex((iteratedItem: MarketplaceItemModel) => iteratedItem.id === item.id);

    return {
      ...state,
      loaded: true,
      marketplace: {
        ...state.marketplace,
        items: [
          ...state.marketplace.items.slice(0, modifiedItemIndex),
          {
            ...state.marketplace.items[modifiedItemIndex],
            stock: state.marketplace.items[modifiedItemIndex].stock - 1,
          },
          ...state.marketplace.items.slice(modifiedItemIndex + 1),
        ]
      },
      client: {
        ...state.client,
        basket: [item, ...state.client.basket],
      }
    }
  }),
  on(MarketplaceActions.clientRemoveItemToBasket, (state, { item }) => {
    const modifiedItemIndex: number = state.marketplace.items.findIndex((filteredItem: MarketplaceItemModel) => filteredItem.id === item.id);

    return {
      ...state,
      loaded: true,
      marketplace: {
        ...state.marketplace,
        items: [
          ...state.marketplace.items.slice(0, modifiedItemIndex),
          {
            ...state.marketplace.items[modifiedItemIndex],
            stock: state.marketplace.items[modifiedItemIndex].stock + 1,
          },
          ...state.marketplace.items.slice(modifiedItemIndex + 1),
        ]
      },
      client: {
        ...state.client,
        basket: state.client.basket.filter(filteredItem => item.id !== filteredItem.id),
      }
    }
  }),
  on(MarketplaceActions.clientCheckout, (state, {newClient}) => ({
    ...state,
    client: {
      ...state.client,
      buyerData: newClient
    }
  })),
  on(MarketplaceActions.clientCheckoutError, (state, { error }) => ({
    ...state,
    error
  })),
  // todo in the real world, this should do a POST request to send this data, therefore i should create an Effect for this flow but since i have no api, i will leave it only here
  on(MarketplaceActions.sellItems, (state) => {
    let itemsCost = 0;
    state.client.basket.forEach(item => {
      itemsCost += item.price;
    });

    return {
      ...state,
      marketplace: {
        ...state.marketplace,
        items: state.marketplace.items.filter(items => items.stock > 0)
      },
      client: {
        ...state.client,
        wallet: state.client.wallet - itemsCost,
        basket: []
      }
    }
  })
);

export function marketplaceReducer(
  state: MarketplaceState | undefined,
  action: Action
) {
  return reducer(state, action);
}
