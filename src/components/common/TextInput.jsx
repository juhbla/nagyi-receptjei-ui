import { Input } from "./Input";

export function TextInput({ id, name, placeholder }) {
  return <Input type="text" id={id} name={name} placeholder={placeholder} />;
}
