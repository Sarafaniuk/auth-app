import { createSelector } from 'reselect'

import { RootState } from '../rootReducer'

const getLoading = (state: RootState) => state.auth.loading
const getError = (state: RootState) => state.auth.error
const getIsAuth = (state: RootState) => state.auth.isAuth

//SELECTORS

export const getErrorSelector = createSelector(getError, (error) => error)
export const getLoadingSelector = createSelector(
	getLoading,
	(loading) => loading
)
export const getIsAuthSelector = createSelector(getIsAuth, (isAuth) => isAuth)
