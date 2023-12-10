const TextArea = ({
  name,
  value,
  maxLength,
  labelText,
  onChange,
  errorMessage = "",
  required = true,
}) => {
  return (
    <>
      <label htmlFor={name}>{labelText}</label>
      <textarea
        className="form-control"
        id={name}
        name={name}
        value={value}
        minLength={0}
        maxLength={maxLength}
        onChange={onChange}
        style={{ resize: "none" }}
        required={required}
      />
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
    </>
  );
};

export default TextArea;
