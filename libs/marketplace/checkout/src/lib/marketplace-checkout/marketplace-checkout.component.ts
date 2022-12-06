import { Component } from '@angular/core';
import {MarketplaceFacade} from "@tasks/marketplace/data-access";
import {FormBuilder, Validators} from "@angular/forms";
import {BuyerData} from "../../../../data-access/src/lib/models/buyer-data.model";

@Component({
  selector: 'tasks-marketplace-checkout',
  templateUrl: './marketplace-checkout.component.html',
  styleUrls: ['./marketplace-checkout.component.scss'],
})
export class MarketplaceCheckoutComponent {
  showReturnToStore = false;
  clientTotalBasketPrice$ = this.facade.clientTotalBasketPrice$;
  checkoutForm = this._fb.group({
    firstName: ["", {
      validators: [Validators.required, Validators.minLength(3)]
    }],
    lastName: ["", {
      validators: [Validators.required, Validators.minLength(3)]
    }],
    address: ["", {
      validators: [Validators.required]
    }],
    city: ["", {
      validators: [Validators.required]
    }],
    state: ["", {
      validators: [Validators.required]
    }],
    email: ["", {
      validators: [Validators.required, Validators.email]
    }],
  });
  client$ = this.facade.getClientShoppingStatus$;

  constructor(
    public facade: MarketplaceFacade,
    private _fb: FormBuilder
  ) {}

  pay() {
    this.facade.checkout({...this.checkoutForm.value} as BuyerData);
    this.showReturnToStore = true;
  }
}
