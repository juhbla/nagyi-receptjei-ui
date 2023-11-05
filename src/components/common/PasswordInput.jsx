import { Input } from "./Input";

export function PasswordInput({ placeholder }) {
  return (
    <Input
      type="password"
      id="password"
      name="password"
      placeholder={placeholder}
    />
  );
}
