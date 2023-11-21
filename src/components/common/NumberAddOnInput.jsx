const NumberAddOnInput = ({
  name,
  value,
  minValue,
  labelText,
  addOnText,
  errorMessage = "",
  onChange,
}) => {
  return (
    <>
      <label htmlFor={name}>{labelText}</label>
      <div className="input-group mb-3">
        <input
          type="number"
          className="form-control"
          id={name}
          name={name}
          value={value}
          min={minValue}
          onChange={onChange}
        />
        <span className="input-group-text">{addOnText}</span>
      </div>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
    </>
  );
};

export default NumberAddOnInput;
