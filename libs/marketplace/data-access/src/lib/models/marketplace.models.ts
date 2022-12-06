/**
 * Interface for the 'Marketplace' data
 */
import {MarketplaceItemModel} from "./marketplace-item.model";

export interface MarketplaceEntity {
  items: MarketplaceItemModel[];
  name: string;
}
