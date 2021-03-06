import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useTypesSelector } from '../../hooks/useTypedSelector';

import styles from './ExchangeHistory.module.css';
import Card from '../../common/card/Card';
import ExchangeItem from '../../common/exchange-item/ExchangeItem';
import img from './exchange-history-img.png';
import { getHistory } from '../../redux/actions/converts';

const ExchangeHistory: React.FC = () => {
  const dispath = useDispatch();
  const history = useTypesSelector((state) => state.converts.history);

  React.useEffect(() => {
    if (history.length === 0) dispath(getHistory());
  }, [])

  return (
    <Card title='История конвертации' styleClass={styles.gridItem} isDarck={true}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          {history.length !== 0 ?
            <ul className={styles.list}>
              {history.map((item: {
                currency: string;
                value: number;
              }[], i: number) => {
                return (
                  <li key={i}>
                    <ExchangeItem valuts={item} />
                  </li>
                )
              })}
            </ul> :
            <div>История пуста</div>}
          <Link to={process.env.PUBLIC_URL + '/converter'}>
            <div className={styles.btn}>Конвертор валют</div>
          </Link>
        </div>
        <img className={styles.img} src={img} />
      </div>
    </Card>
  );
}

export default ExchangeHistory;