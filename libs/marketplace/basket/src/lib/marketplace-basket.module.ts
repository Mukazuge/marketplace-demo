import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketplaceBasketComponent } from './marketplace-basket/marketplace-basket.component';
import {RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forChild([
      { path: '', component: MarketplaceBasketComponent }
    ]),
  ],
  declarations: [MarketplaceBasketComponent],
})
export class MarketplaceBasketModule {}
