import { createSelector } from '@ngrx/store'

export const selectCurrencies = state => state.reducer.currencies
export const selectFavoriteIds = state => state.reducer.favoriteIds
export const selectLoading = state => state.reducer.loading
export const selectError = state => state.reducer.error

export const selectFavoriteCurrencies = createSelector(
  selectCurrencies,
  selectFavoriteIds,
  (selectedCurrencies, selectedFavoriteIds) => {
    if (selectedCurrencies && selectedFavoriteIds) {
      return selectedCurrencies.filter(currency => selectedFavoriteIds.indexOf(currency.asset_id) !== -1)
    }
    return []
  },
)

export const selectNonFavoriteCurrencies = createSelector(
  selectCurrencies,
  selectFavoriteIds,
  (selectedCurrencies, selectedFavoriteIds) => {
    if (selectedCurrencies && selectedFavoriteIds) {
      return selectedCurrencies.filter(currency => selectedFavoriteIds.indexOf(currency.asset_id) === -1)
    }
    return selectedCurrencies
  },
)
