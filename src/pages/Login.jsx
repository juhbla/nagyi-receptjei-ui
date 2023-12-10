import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../components/common/Button";
import TextInput from "../components/common/TextInput";
import PasswordInput from "../components/common/PasswordInput";

import { authenticate } from "../services/userService";

const Login = ({ pageName, registrationPagePath }) => {
  const [authentication, setAuthentication] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await authenticate(
      authentication.username,
      authentication.password,
    );
    const { statusCode } = data;

    if (statusCode === 400) {
      alert("Hibás felhasználónév vagy jelszó!");
    }

    if (statusCode === 200) {
      const { value } = data;
      localStorage.setItem("user", JSON.stringify(value));
      window.location.href = "/";
    }
  };

  const user = localStorage.getItem("user");
  if (user) {
    window.location.href = "/";
  }

  const handleTextChange = ({ currentTarget: input }) => {
    const updatedAuthentication = { ...authentication };
    updatedAuthentication[input.name] = input.value;
    setAuthentication(updatedAuthentication);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>{pageName}</h1>
          <form onSubmit={handleSubmit}>
            <TextInput
              name="username"
              maxLength={10}
              placeholder="Felhasználónév"
              onChange={handleTextChange}
            />
            <PasswordInput placeholder="Jelszó" onChange={handleTextChange} />
            <Button type="submit" className="btn btn-success" text="Belépés" />
          </form>
        </div>
        <div className="row">
          <div className="col-12">
            <h5>
              <Link
                to={registrationPagePath}
                style={{ textDecoration: "none" }}
              >
                Nincs még fiókod? Regisztrálj!
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
