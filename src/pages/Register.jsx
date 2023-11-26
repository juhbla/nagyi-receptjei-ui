import { EmailInput } from "../components/common/EmailInput";
import { PasswordInput } from "../components/common/PasswordInput";
import Button from "../components/common/Button";
import TextInput from "../components/common/TextInput";

export function Register({ pageName }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>{pageName}</h1>
          <EmailInput />
          <TextInput
            id="username"
            name="username"
            placeholder="Felhasználónév"
          />
          <PasswordInput placeholder="Jelszó" />
          <PasswordInput placeholder="Jelszó megerősítése" />
          <Button
            type="submit"
            className="btn btn-success mt-3"
            text="Belépés"
          />
        </div>
      </div>
    </div>
  );
}
