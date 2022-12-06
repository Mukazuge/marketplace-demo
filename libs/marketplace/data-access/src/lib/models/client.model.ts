import {BuyerData} from "./buyer-data.model";
import {MarketplaceItemModel} from "./marketplace-item.model";

export interface ClientModel {
  basket: MarketplaceItemModel[];
  wallet: number;
  buyerData: BuyerData | null;
}
