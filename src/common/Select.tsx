import React from 'react';

import styles from './convert-item/ConvertItem.module.css';

type SelectProps = {
  value: { value: string; text: string },
  options: { value: string; text: string }[],
  onSelect: Function,
}

const Select: React.FC<SelectProps> = ({ value, options, onSelect }) => {
  return (
    <select value={value.value}
      onChange={(e) => onSelect(e)}
      className={styles.selectList}>
      <option
        className={styles.item}
        value={value.value}>{value.text}
      </option>
      {options && options.map((option, i: number) => {
        return (
          <option
            className={styles.item}
            key={i}
            value={option.value}>{option.text}
          </option>)
      })}
    </select>
  );
}

export default Select;