export function Button({ type, className, text }) {
  return (
    <button type={type} className={className}>
      {text}
    </button>
  );
}
