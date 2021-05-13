import styles from './convert-item/ConvertItem.module.css';

type InputProps = {
  value: number,
  onInput: Function,
}

const Input: React.FC<InputProps> = ({ value, onInput }) => {
  return (
    <input className={styles.input}
      onChange={(e) => onInput(e)}
      type="number" min="0" value={value} />
  );
}

export default Input;