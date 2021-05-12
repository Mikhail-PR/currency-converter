import styles from './Card.module.css';

type CardProps = {
  title: string,
  isDarck?: boolean,
  children: any,
  styleClass?: string,
}

const Card: React.FC<CardProps> = ({ title, isDarck, children, styleClass }) => {
  return (
    <div className={`${styles.card} ${styleClass ? styleClass : ''} ${isDarck ? styles.darck : ''}`}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
}

export default Card;