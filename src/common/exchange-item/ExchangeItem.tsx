import React from 'react';

import styles from './ExchangeItem.module.css';

type ExchangeItem = {
  valuts: {
    value: number,
    currency: string
  }[],
}

const ExchangeItem: React.FC<ExchangeItem> = ({ valuts }) => {
  return (
    <div className={styles.item}>
      {valuts && valuts.map((valute: any, i: number) => {
        return (
          <>
            <div className={styles.exchange} key={i}>
              <div className={styles.value}>{parseFloat(valute.value)}</div>
              <div className={styles.currency}>{valute.currency}</div>
            </div>
            {i !== valuts.length - 1 && <div>=</div>}
          </>
        )
      })}
    </div>
  );
}

export default ExchangeItem;