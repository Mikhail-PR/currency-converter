import styles from './Header.module.css';
import logo from './logo.svg';

import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className={styles.wrapper + ' ' + styles.gridItem}>
      <div className={styles.header}>
        <Link to={process.env.PUBLIC_URL + '/'}>
          <img src={logo} alt="Курс валют" />
          <h1 className={styles.title}>Курс валют</h1>
        </Link>
      </div>
    </div>
  );
}

export default Header;