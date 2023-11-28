export function Input({
  type,
  name,
  value,
  id,
  placeholder,
  minLength,
  maxLength,
  onChange,
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
    />
  );
}
