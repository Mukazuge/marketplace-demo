import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from "@angular/material/card";
import {MarketplaceDataAccessModule} from "@tasks/marketplace/data-access";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {MatIconModule} from "@angular/material/icon";
import {ToastrModule} from "ngx-toastr";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    MarketplaceDataAccessModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 5000,
    }),
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'marketplace' },
      {
        path: 'marketplace',
        loadChildren: () =>
          import('@tasks/marketplace/page').then(
            (m) => m.MarketplacePageModule
          ),
      },
      {
        path: 'basket',
        loadChildren: () =>
          import('@tasks/marketplace/basket').then(
            (m) => m.MarketplaceBasketModule
          ),
      },
      {
        path: 'checkout',
        loadChildren: () =>
          import('@tasks/marketplace/checkout').then(
            (m) => m.MarketplaceCheckoutModule
          ),
      },
      { path: '**', redirectTo: 'marketplace', pathMatch: 'full' }
    ]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument(),
    StoreModule.forRoot(
      {},
      {
        metaReducers: [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
