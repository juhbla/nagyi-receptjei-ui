import { useState } from "react";

import EmailInput from "../components/common/EmailInput";
import PasswordInput from "../components/common/PasswordInput";
import Button from "../components/common/Button";
import TextInput from "../components/common/TextInput";

import { createUser } from "../services/userService";

const Registration = ({ pageName }) => {
  const [createdUser, setCreatedUser] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const user = localStorage.getItem("user");
  if (user) {
    window.location.href = "/";
  }

  const handleTextChange = ({ currentTarget: input }) => {
    const updatedUser = { ...createdUser };
    updatedUser[input.name] = input.value;
    setCreatedUser(updatedUser);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await createUser(createdUser);
    const { statusCode } = data;

    if (statusCode === 400) {
      alert("Sikertelen regisztráció!");
    }

    if (statusCode === 200) {
      const { value } = data;
      localStorage.setItem("user", JSON.stringify(value));
      window.location.href = "/";
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>{pageName}</h1>
          <form onSubmit={handleSubmit}>
            <EmailInput onChange={handleTextChange} />
            <TextInput
              id="username"
              name="username"
              placeholder="Felhasználónév"
              onChange={handleTextChange}
            />
            <PasswordInput placeholder="Jelszó" onChange={handleTextChange} />
            <PasswordInput
              name="confirmPassword"
              placeholder="Jelszó megerősítése"
              onChange={handleTextChange}
            />
            <Button
              type="submit"
              className="btn btn-success"
              text="Regisztráció"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
