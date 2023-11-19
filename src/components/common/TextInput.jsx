const TextInput = ({
  type,
  name,
  value,
  maxLength,
  labelText,
  errorMessage = "",
  onChange,
}) => {
  return (
    <>
      <div className="form-group">
        <label htmlFor={name}>{labelText}</label>
        <input
          type={type}
          className="form-control"
          id={name}
          name={name}
          value={value}
          minLength={0}
          maxLength={maxLength}
          onChange={onChange}
        />
      </div>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
    </>
  );
};

export default TextInput;
