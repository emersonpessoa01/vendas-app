interface InputProps {
  onChange?: (value: string) => void;
  label: string;
  columnClasses?: string;
}

export const Input: React.FC<InputProps> = ({ onChange, label, columnClasses }) => {
  return <div className={`field column ${columnClasses}`}>
    <label htmlFor="inputSku" className="label">
      {label}
    </label>
    <div className="control">
      <input
        id="inputSku"
        autoFocus
        className="input"
        type="text"
        placeholder="Digite o SKU do produto"
        value={""}
        onChange={(event) => {
            if(onChange) {
                onChange(event.target.value);
            }
        }}
      />
    </div>
  </div>
};