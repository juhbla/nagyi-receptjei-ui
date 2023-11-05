export function Input({ type, id, name, placeholder }) {
  return (
    <input
      type={type}
      className="form-control mt-3"
      id={id}
      name={name}
      placeholder={placeholder}
    />
  );
}
