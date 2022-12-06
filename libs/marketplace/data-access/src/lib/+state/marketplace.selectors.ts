import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  MARKETPLACE_FEATURE_KEY,
  MarketplaceState,
  marketplaceAdapter,
} from './marketplace.reducer';

export const getMarketplaceState = createFeatureSelector<MarketplaceState>(
  MARKETPLACE_FEATURE_KEY
);

const { selectAll, selectEntities } = marketplaceAdapter.getSelectors();

export const getMarketplaceLoaded = createSelector(
  getMarketplaceState,
  (state: MarketplaceState) => state.loaded
);

export const getMarketplaceError = createSelector(
  getMarketplaceState,
  (state: MarketplaceState) => state.error
);

export const getAllMarketplace = createSelector(
  getMarketplaceState,
  (state: MarketplaceState) => selectAll(state)
);

export const getMarketplaceEntities = createSelector(
  getMarketplaceState,
  (state: MarketplaceState) => selectEntities(state)
);

export const getMarketplace = createSelector(
  getMarketplaceState,
  (state: MarketplaceState) => state.marketplace
);

export const getClientShoppingStatus = createSelector(
  getMarketplaceState,
  (state: MarketplaceState) => ({
    wallet: state.client.wallet,
    basketCount: state.client.basket.length
  })
);

export const getClientPersonalData = createSelector(
  getMarketplaceState,
  (state: MarketplaceState) => state.client.buyerData
)

export const getClientBasket = createSelector(
  getMarketplaceState,
  (state: MarketplaceState) => state.client.basket
);

export const clientTotalBasketPrice = createSelector(
  getMarketplaceState,
  (state: MarketplaceState) => {
    let basketItemsPriceSummary = 0;

    state.client.basket.forEach(item => basketItemsPriceSummary += item.price);
    return basketItemsPriceSummary;
  }
);
