import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketplacePageComponent } from './marketplace-page/marketplace-page.component';
import {RouterModule} from "@angular/router";
import {MarketplaceFacade} from "@tasks/marketplace/data-access";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forChild([
      { path: '', component: MarketplacePageComponent }
    ]),
  ],
  providers: [MarketplaceFacade],
  declarations: [MarketplacePageComponent],
})
export class MarketplacePageModule {}
