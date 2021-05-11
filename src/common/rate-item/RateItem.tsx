import React from 'react';

import styles from './RateItem.module.css';

type RateItem = {
  name: string,
  abbreviation: string,
  rate: number,
}

const RateItem: React.FC<RateItem> = ({ name, abbreviation, rate }) => {
  return (
    <div className={styles.item}>
      <h3 className={styles.title}>{name}, {abbreviation}</h3>
      <div className={styles.value}>{rate}</div>
    </div>
  );
}

export default RateItem;