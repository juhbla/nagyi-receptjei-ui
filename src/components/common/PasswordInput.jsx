import { Input } from "./Input";

export function PasswordInput({ placeholder }) {
  const password = "password";
  return (
    <Input
      type={password}
      id={password}
      name={password}
      placeholder={placeholder}
    />
  );
}
