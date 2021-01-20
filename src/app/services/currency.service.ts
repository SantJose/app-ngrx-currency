import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Currency } from '../models/currency.model'

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private url = 'http://rest-sandbox.coinapi.io/v1/assets'

  private apikey = '1A2BD803-1B3E-4BF4-9D19-7B693925B2D3'

  constructor(private httpClient: HttpClient) { }

  // TODO: Implement pagination so that it goes smoother showin only a pool of X Currencies
  getAll(): Observable<Currency[]> {
    return this.httpClient.get<Currency[]>(`${this.url}?apikey=${this.apikey}`)
      .pipe(
        map(currencies => currencies.filter(currency => currency.type_is_crypto).map(currency => ({ ...currency }))),
      )
    // return this.getMockData()
  }

  getMockData(): Observable<Currency[]> {
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
        name: 'prueba2',
        type_is_crypto: 1,
        price_usd: 3,
      },
    ])
  }
}
