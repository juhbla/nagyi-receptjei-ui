const NumberAddOnInput = ({
  name,
  value,
  minValue,
  labelText,
  addOnText,
  onChange,
  errorMessage = "",
  required = true,
}) => {
  return (
    <>
      <label htmlFor={name}>{labelText}</label>
      <div className="input-group">
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
        <span className="input-group-text">{addOnText}</span>
      </div>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
    </>
  );
};

export default NumberAddOnInput;
