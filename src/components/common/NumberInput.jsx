const NumberInput = ({
  name,
  value,
  minValue,
  labelText,
  errorMessage = "",
  onChange,
}) => {
  return (
    <>
      <div className="form-group">
        <label htmlFor={name}>{labelText}</label>
        <input
          type="number"
          className="form-control mt-3"
          id={name}
          name={name}
          value={value}
          min={minValue}
          onChange={onChange}
        />
      </div>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
    </>
  );
};

export default NumberInput;
