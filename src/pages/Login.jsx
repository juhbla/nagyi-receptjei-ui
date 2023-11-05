import { EmailInput } from "../components/common/EmailInput";
import { PasswordInput } from "../components/common/PasswordInput";
import { Button } from "../components/common/Button";
import { Link } from "react-router-dom";

export function Login({ pageName }) {
  return (
    <div className="row">
      <div className="col-12">
        <h1>{pageName}</h1>
        <EmailInput />
        <PasswordInput />
        <Button type="submit" className="btn btn-success mt-3" text="Belépés" />
      </div>
      <div className="row">
        <div className="col-12">
          <div>
            <p>Nincs még fiókod?</p>
          </div>
          <div>
            <Link to="/register">Regisztrálj!</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
