import { InputHTMLAttributes } from "react";
interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange?: (value: string) => void;
  label: string;
  columnClasses?: string;
  /* id: string;*/
}

export const Input: React.FC<InputProps> = ({ onChange, label, columnClasses, id, ...inputProps }) => {
  return (
    <div className={`field column ${columnClasses}`}>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <div className="control">
        <input
          id={id}
          {...inputProps}
          autoFocus
          className="input"
          type="text"
          onChange={(event) => {
            if (onChange) {
              onChange(event.target.value);
            }
          }}
        />
      </div>
    </div>
  );
};
