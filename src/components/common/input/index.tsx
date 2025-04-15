import { InputHTMLAttributes } from "react";
import { formatReal } from "config/util/money";
interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange?: (value: string) => void;
  label: string;
  columnClasses?: string;
  currency?: boolean;
  /* id: string;*/
}

export const Input: React.FC<InputProps> = ({ onChange, label, columnClasses, id, currency, ...inputProps }) => {
  const onInputchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    if (value && currency) {
      value = formatReal(value);
    }
    if (onChange) {
      onChange(value);
    }
  };  return (    <div className={`field column ${columnClasses ?? ''}`}>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <div className="control">
        <input id={id} {...inputProps} autoFocus className="input" type="text" onChange={onInputchange} />
      </div>
    </div>
  );
};
