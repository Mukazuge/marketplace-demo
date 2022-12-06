import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromMarketplace from './+state/marketplace.reducer';
import { MarketplaceEffects } from './+state/marketplace.effects';
import { MarketplaceFacade } from './+state/marketplace.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromMarketplace.MARKETPLACE_FEATURE_KEY,
      fromMarketplace.marketplaceReducer
    ),
    EffectsModule.forFeature([MarketplaceEffects]),
  ],
  providers: [MarketplaceFacade],
})
export class MarketplaceDataAccessModule {}
