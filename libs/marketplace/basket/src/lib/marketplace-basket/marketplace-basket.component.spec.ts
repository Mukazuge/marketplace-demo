import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplaceBasketComponent } from './marketplace-basket.component';

describe('MarketplaceBasketComponent', () => {
  let component: MarketplaceBasketComponent;
  let fixture: ComponentFixture<MarketplaceBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarketplaceBasketComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MarketplaceBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
