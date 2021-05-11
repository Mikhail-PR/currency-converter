export interface RatesState {
  currencies: Currency[];
  isLoaded: boolean;
  error: string | null;
}

export interface Currency {
  name: string;
  abbreviation: string;
  rate: number;
}

export enum RatesActionTypes {
  GET_RATES_STARTED = 'GET_RATES_STARTED',
  GET_RATES_SUCCESS = 'GET_RATES_SUCCESS',
  GET_RATES_ERROR = 'GET_RATES_ERROR',
}

interface GetRatesStartedAction {
  type: RatesActionTypes.GET_RATES_STARTED;
}

interface GetRatesSuccessAction {
  type: RatesActionTypes.GET_RATES_SUCCESS;
  payload: any[];
}

interface GetRatesErrorAction {
  type: RatesActionTypes.GET_RATES_ERROR;
  payload: string;
}

export type RatesAction = GetRatesStartedAction | GetRatesSuccessAction | GetRatesErrorAction;