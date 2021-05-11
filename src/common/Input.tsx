import styles from './convert-item/ConvertItem.module.css';

type InputProps = {
  value: number,
  onInput: Function,
}

const Input: React.FC<InputProps> = ({ value, onInput }) => {
  return (
    <input className={styles.value}
      onChange={(e) => onInput(e)}
      type="number" value={value} />
  );
}

export default Input;