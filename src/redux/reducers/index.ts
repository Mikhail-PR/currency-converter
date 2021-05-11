import { combineReducers } from 'redux';
import ratesReducer from './rates'
import convertItemsReducer from './converts'

export const rootReducer = combineReducers({
  rates: ratesReducer,
  converts: convertItemsReducer,
})

export type RootState = ReturnType<typeof rootReducer>;