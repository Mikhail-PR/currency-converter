import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypesSelector } from '../../hooks/useTypedSelector';

import styles from './ExchangeRates.module.css';
import Card from '../../common/card/Card';
import RateItem from '../../common/rate-item/RateItem';
import { getRates } from '../../redux/actions/rates';
import { Currency } from "../../types/rates";

const ExchangeRates: React.FC = () => {
  const dispath = useDispatch();
  const { currencies, isLoaded } = useTypesSelector(({ rates }) => rates);

  React.useEffect(() => {
    if (!isLoaded) dispath(getRates())
  }, []);

  return (
    <Card title='Курс валют ЦБ РФ' styleClass={styles.gridItem}>
      {isLoaded ?
        <div className={styles.items}>
          {currencies.map(({ name, abbreviation, rate }: Currency, i: number) => {
            if (abbreviation !== 'RUB') {
              return (
                <div key={i}>
                  <RateItem
                    name={name}
                    abbreviation={abbreviation}
                    rate={rate}
                  />
                </div>)
            }
          })}
        </div> :
        <div className={styles.status}>Не загружено</div>}
    </Card>
  );
}

export default ExchangeRates;