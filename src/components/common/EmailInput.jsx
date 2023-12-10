import { Input } from "./Input";

const EmailInput = ({
  labelText,
  onChange,
  errorMessage = "",
  required = true,
}) => {
  const email = "email";

  return (
    <>
      <label htmlFor={email}>{labelText}</label>
      <Input
        type={email}
        name={email}
        placeholder="E-mail cím"
        onChange={onChange}
        required={required}
      />
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
    </>
  );
};

export default EmailInput;
