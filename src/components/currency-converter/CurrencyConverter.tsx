import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypesSelector } from '../../hooks/useTypedSelector';

import { filterUnselectedItems, changeValue, setHistory, convert, changeCurrency } from '../../redux/actions/converts';
import styles from './CurrencyConverter.module.css';
import Card from '../../common/card/Card';
import ConvertItem from '../../common/convert-item/ConvertItem';
import { getRates } from '../../redux/actions/rates';
import store from '../../redux/store';
import { ConvertItemState } from "../../types/converts";
import { Currency } from "../../types/rates";

const CurrencyConverter: React.FC = () => {
  const converts = useTypesSelector(({ converts }: any) => converts.items);
  const { currencies, isLoaded } = useTypesSelector(({ rates }) => rates);
  const unselectedСurrencies = useTypesSelector((state) => state.converts.unselectedItems);
  const dispath = useDispatch();

  const initItems = (items: Currency[]) => {
    items.forEach((currency: Currency, i: number) => {
      if (i < items.length - 1) dispath(changeCurrency(i, currency))
    })
    dispath(filterUnselectedItems(items));
  }

  React.useEffect(() => {
    if (!isLoaded) {
      dispath(getRates());

      let currentCurrencies: boolean;
      const unsubscribe = store.subscribe(() => {
        let previousCurrencies = currentCurrencies;
        currentCurrencies = store.getState().rates.isLoaded;
        const currencies = store.getState().rates.currencies;

        if (previousCurrencies !== currentCurrencies) {
          initItems(currencies);
        }
        unsubscribe();
      })
    }
    else {
      initItems(currencies);
    }
  }, []);

  const allConvert = (itemId: number, calculatedItemsId?: number[]) => {
    converts.forEach((convertItem: ConvertItemState, id: number) => {
      if (id !== itemId) {
        dispath(convert(id));
        dispath(setHistory(itemId, id));
        calculatedItemsId && calculatedItemsId.push(id);
      }
    });
  }

  return (
    <Card title='Конвертер валют' styleClass={styles.gridItem}>
      <div className={styles.content} >
        {converts.map((convertItem: ConvertItemState, i: number) => {
          return (
            <ConvertItem
              value={convertItem.value}
              onInput={(e: any) => {
                dispath(changeValue(i, +(e.target.value)));

                if (+(e.target.value)) {
                  const calculatedItemsId: number[] = [];
                  allConvert(i, calculatedItemsId);
                  dispath(setHistory(calculatedItemsId[0], calculatedItemsId[1]));

                } else {
                  converts.forEach((item: ConvertItemState, i: number) => {
                    if (item !== convertItem) {
                      dispath(changeValue(i, 0));
                    }
                  })
                }
              }}

              currency={convertItem.currency}

              options={unselectedСurrencies}

              onSelect={(e: any) => {
                const currency = currencies.find((currency: Currency) => currency.abbreviation === e.target.value);
                dispath(changeCurrency(i, currency));
                dispath(filterUnselectedItems(currencies));

                if (convertItem.value) {
                  if (!convertItem.isConvertable) {
                    const convertableItemId = converts.findIndex(({ isConvertable }: ConvertItemState) => isConvertable);
                    dispath(convert(i));
                    dispath(setHistory(convertableItemId, i));
                  }

                  else {
                    allConvert(i);
                  }
                }
              }}
            />
          )
        })}
      </div>
    </Card>
  );
}

export default CurrencyConverter;