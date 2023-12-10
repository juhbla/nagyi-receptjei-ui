import { Input } from "./Input";

const PasswordInput = ({
  name = "password",
  labelText,
  placeholder,
  onChange,
  errorMessage = "",
  required = true,
}) => {
  const password = "password";
  return (
    <>
      <label htmlFor={name}>{labelText}</label>
      <Input
        type={password}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
    </>
  );
};

export default PasswordInput;
