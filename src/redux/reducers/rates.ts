import { RatesState, RatesAction, RatesActionTypes } from "../../types/rates";

const initialState: RatesState = {
  currencies: [{
    abbreviation: 'RUB',
    rate: 1,
    name: 'Российский рубль',
  }],
  isLoaded: false,
  error: null,
}

const rates = (state = initialState, action: RatesAction) => {
  if (action.type === RatesActionTypes.GET_RATES_SUCCESS) {
    return {
      ...state,
      currencies: [...state.currencies, ...action.payload],
      isLoaded: true,
    }
  }

  if (action.type === RatesActionTypes.GET_RATES_ERROR) {
    return {
      ...state,
      error: action.payload,
    }
  }

  return state;
}

export default rates;