export function Input({
  type,
  name,
  value,
  id,
  placeholder,
  minLength,
  maxLength,
  onChange,
  disabled = false,
  additionalStyle = {},
  required = true,
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      id={id}
      className="form-control"
      placeholder={placeholder}
      minLength={minLength}
      maxLength={maxLength}
      onChange={onChange}
      disabled={disabled}
      style={additionalStyle}
      required={required}
    />
  );
}
