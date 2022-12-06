import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import { MarketplaceEntity } from './models/marketplace.models';

@Injectable({
  providedIn: 'root'
})
export class MarketplaceService {
  public getCatalog(): Observable<MarketplaceEntity> {
    return of({
      name: 'GrandPa\'s Thrift Shop',
      items: [
        {
          id: 0,
          name: 'Item 1',
          imgUrl: 'https://img.uline.com/is/image/uline/S-21700-2X?$MediumRHD$',
          stock: 1,
          price: 100,
        },
        {
          id: 1,
          name: 'Item 2',
          imgUrl: 'https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Winter/Winter%20jackets/Fjallraven%20Nuuk%20Parka.jpg',
          stock: 1,
          price: 20,
        },
        {
          id: 2,
          name: 'Item 3',
          imgUrl: 'https://www.helikon-tex.com/media/catalog/product/cache/4/image/500x/17f82f742ffe127f42dca9de82fb58b1/k/u/ku-hky-nl-11_1.jpeg',
          stock: 1,
          price: 40,
        },
        {
          id: 3,
          name: 'Item 4',
          imgUrl: 'https://cdn-images.farfetch-contents.com/18/46/66/79/18466679_39774228_1000.jpg',
          stock: 1,
          price: 12,
        },
        {
          id: 4,
          name: 'Item 5',
          imgUrl: 'https://www.travelandleisure.com/thmb/GNQxD99GAUyCDxxVyVIbfx1YFDY=/fit-in/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/marmot-mens-stockholm-down-puffer-jacket-AMZN-COAT0920-7eaf8243051040849817feb0039fd8b4.jpg',
          stock: 1,
          price: 11,
        },
        {
          id: 5,
          name: 'Item 6',
          imgUrl: 'https://www.bfgcdn.com/1500_1500_90/004-2538-0511/fjaellraeven-greenland-winter-jacket-winter-jacket.jpg',
          stock: 1,
          price: 55,
        },
        {
          id: 6,
          name: 'Item 7',
          imgUrl: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1660237225-Therme-Insulated-Jacket-Lucent.jpg',
          stock: 1,
          price: 10,
        },
        {
          id: 7,
          name: 'Item 8',
          imgUrl: 'https://3.imimg.com/data3/AN/QA/GLADMIN-41110/winter-jackets-500x500.jpg',
          stock: 1,
          price: 15,
        },
        {
          id: 8,
          name: 'Item 9',
          imgUrl: 'https://5.imimg.com/data5/LB/AL/DW/SELLER-61259432/10dare-thick-winter-jacket-250x250.jpg',
          stock: 1,
          price: 32,
        },
      ]
    }) as Observable<MarketplaceEntity>;
  }
}
