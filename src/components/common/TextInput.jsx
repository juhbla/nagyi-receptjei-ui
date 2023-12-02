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
}) => {
  return (
    <>
      <div className="form-group">
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
        />
      </div>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
    </>
  );
};

export default TextInput;
