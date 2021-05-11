import styles from './Converter.module.css';
import { Header, CurrencyConverter } from '../components';

const Converter: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.gridContainer}>
        <CurrencyConverter />
      </div>
    </>
  );
}

export default Converter;