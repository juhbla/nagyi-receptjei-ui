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
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      id={id}
      className="form-control mt-3"
      placeholder={placeholder}
      minLength={minLength}
      maxLength={maxLength}
      onChange={onChange}
      disabled={disabled}
      style={additionalStyle}
    />
  );
}
