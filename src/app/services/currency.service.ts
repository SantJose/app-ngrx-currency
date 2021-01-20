import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Currency } from '../models/currency.model'

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  getAll(): Observable<Currency[]> {
    return of([
      {
        asset_id: '0',
        name: 'prueba0',
        type_is_crypto: 1,
        price_usd: 1,
      },
      {
        asset_id: '1',
        name: 'prueba1',
        type_is_crypto: 1,
        price_usd: 2,
      },
      {
        asset_id: '2',
        name: 'prueba0',
        type_is_crypto: 1,
        price_usd: 3,
      },
    ])
  }
}
