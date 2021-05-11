import styles from './Card.module.css';

type CardProps = {
  title: string,
  isDarck?: boolean,
  children: any,
}

const Card: React.FC<CardProps> = ({ title, isDarck, children }) => {
  return (
    <div className={`${styles.card} ${isDarck ? styles.darck : ''}`}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
}

export default Card;