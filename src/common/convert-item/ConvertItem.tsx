import Select from '../Select';
import Input from '../Input';

type ConvertItemProps = {
  value: number,
  onInput: Function,
  options: any[],
  currency: any,
  onSelect: Function,
}

const ConvertItem: React.FC<ConvertItemProps> = ({ value, onInput, currency, options, onSelect }) => {
  return (
    <>
      <Input value={value} onInput={onInput} />
      <Select
        value={{
          value: currency.abbreviation,
          text: `${currency.name}, ${currency.abbreviation}`,
        }}
        options={options.map(option => {
          return {
            value: option.abbreviation,
            text: `${option.name}, ${option.abbreviation}`
          }
        })}
        onSelect={onSelect} />
    </>
  );
}

export default ConvertItem;