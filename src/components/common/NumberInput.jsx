const NumberInput = ({
  name,
  value,
  minValue,
  labelText,
  onChange,
  errorMessage = "",
  required = true,
}) => {
  return (
    <>
      <label htmlFor={name}>{labelText}</label>
      <input
        type="number"
        className="form-control"
        id={name}
        name={name}
        value={value}
        min={minValue}
        onChange={onChange}
        required={required}
      />
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
    </>
  );
};

export default NumberInput;
