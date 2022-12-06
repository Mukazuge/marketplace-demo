import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketplaceCheckoutComponent } from './marketplace-checkout/marketplace-checkout.component';
import {RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    RouterModule.forChild([
      { path: '', component: MarketplaceCheckoutComponent }
    ]),
  ],
  declarations: [MarketplaceCheckoutComponent],
})
export class MarketplaceCheckoutModule {}
