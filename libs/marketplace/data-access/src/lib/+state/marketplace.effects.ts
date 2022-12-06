import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as MarketplaceActions from './marketplace.actions';
import {MarketplaceService} from "../marketplace.service";
import {catchError, map, of, switchMap} from "rxjs";
import { MarketplaceEntity } from '../models/marketplace.models';
import {ToastrService} from "ngx-toastr";
import {clientCheckoutSuccess} from "./marketplace.actions";
import {BuyerData} from "../models/buyer-data.model";

@Injectable()
export class MarketplaceEffects {
  private actions$ = inject(Actions);
  private service$ = inject(MarketplaceService);
  private toastr = inject(ToastrService);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MarketplaceActions.MarketplaceActionTypes.loadMarketplace),
      switchMap(() => this.service$.getCatalog().pipe(
          map((marketplace: MarketplaceEntity ) => {
            return MarketplaceActions.loadMarketplaceSuccess({marketplace});
            }

          ),
          catchError(({ error }) => of(
              MarketplaceActions.loadMarketplaceError({error})
            )
          ),
        ),
      ),
    )
  );

  checkout$ = createEffect(() =>
  this.actions$.pipe(
    ofType(MarketplaceActions.ClientActionTypes.clientCheckout),
    map(() => {
      // todo we should be sending this data in a POST request for further payment steps.
      this.toastr.success('Purchased!', 'Cashin! $.$')
      return MarketplaceActions.sellItems()
    }),
    catchError(({ error }) => of(
        MarketplaceActions.clientCheckoutError({error})
      )
    ),
  ));
}
