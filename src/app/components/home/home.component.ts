import { Component, OnInit } from '@angular/core'

import { Store } from '@ngrx/store'

import { Observable } from 'rxjs'

import { Currency } from 'src/app/models/currency.model'
import {
  ADD_ID_TO_FAVORITE_ACTION_TYPE,
  FILTER_CURRENCY_BY_NAME_ACTION_TYPE,
  LOAD_CURRENCIES_ACTION_TYPE,
} from 'src/app/state/app.actions'
import { selectNonFavoriteCurrenciesFiltered } from 'src/app/state/app.selector'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  currencies$: Observable<Currency[]> = this.store.select(selectNonFavoriteCurrenciesFiltered)

  constructor(
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.store.dispatch({ type: LOAD_CURRENCIES_ACTION_TYPE })
  }

  search(event) {
    this.searchCurrenciesByName(event)
  }

  addToFavorites(id: string): void {
    this.store.dispatch({ type: ADD_ID_TO_FAVORITE_ACTION_TYPE, id })
  }

  searchCurrenciesByName(searchTerm: string): void {
    this.store.dispatch({ type: FILTER_CURRENCY_BY_NAME_ACTION_TYPE, searchTerm })
  }
}
