import { Dispatch } from 'react';
import axios from 'axios';
import { RatesAction, RatesActionTypes } from "../../types/rates";

export const getRates = () => {
  return (dispatch: Dispatch<RatesAction>) => {
    dispatch({ type: RatesActionTypes.GET_RATES_STARTED });
    const currencies: Array<any> = ['USD', 'EUR', 'GBP']

    axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
      .then(response => {
        for (let valute in response.data.Valute) {
          const valuteIndex = currencies.indexOf(valute)

          if (valuteIndex !== -1) {
            currencies[valuteIndex] = {
              abbreviation: valute,
              rate: response.data.Valute[valute].Value,
              name: response.data.Valute[valute].Name.slice(0, 15),
            }
          }
        }

        dispatch({
          type: RatesActionTypes.GET_RATES_SUCCESS,
          payload: [
            ...currencies
          ]
        });
      })
      .catch(() => {
        dispatch({
          type: RatesActionTypes.GET_RATES_ERROR,
          payload: 'Произошла ошибка при загрузке курсов',
        });
      });
  };
};