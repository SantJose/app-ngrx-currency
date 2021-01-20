import { Injectable } from '@angular/core'

import { of } from 'rxjs'
import { catchError, map, mergeMap } from 'rxjs/operators'

import { Actions, createEffect, ofType } from '@ngrx/effects'

import { CurrencyService } from '../services/currency.service'
import * as Action from './app.actions'

@Injectable()
export class AppEffects {
    loadCurrencies$ = createEffect(() => this.actions$.pipe(
      ofType(Action.LOAD_CURRENCIES_ACTION_TYPE),
      mergeMap(() => this.currencyService.getAll().pipe(
        map(currencies => ({ type: Action.LOAD_CURRENCIES_SUCCESS_ACTION_TYPE, currencies })),
        catchError(() => of({ type: Action.LOAD_CURRENCIES_ERROR_ACTION_TYPE })),
      )),
    ))

    constructor(
        private actions$: Actions,
        private currencyService: CurrencyService,
    ) {}
}
