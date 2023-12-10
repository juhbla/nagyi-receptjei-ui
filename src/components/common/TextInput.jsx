import { Input } from "./Input";

const TextInput = ({
  type = "text",
  name,
  value,
  maxLength,
  labelText,
  placeholder,
  errorMessage = "",
  onChange,
  disabled = false,
  additionalStyle = {},
  required = true,
}) => {
  return (
    <>
      <label htmlFor={name}>{labelText}</label>
      <Input
        type={type}
        name={name}
        value={value}
        id={name}
        className="form-control"
        placeholder={placeholder}
        minLength={0}
        maxLength={maxLength}
        onChange={onChange}
        disabled={disabled}
        additionalStyle={additionalStyle}
        required={required}
      />
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
    </>
  );
};

export default TextInput;
