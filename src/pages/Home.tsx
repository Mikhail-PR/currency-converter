import styles from './Home.module.css';
import { Header, ExchangeRates, ExchangeHistory } from '../components';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.gridContainer}>
        <ExchangeRates />
        <ExchangeHistory />
      </div>
    </>
  );
}

export default Home;