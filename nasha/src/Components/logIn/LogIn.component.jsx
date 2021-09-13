import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { SubjectContext } from "../../store/SubjectContext";
import "./LogIn.css";

const LogIn = () => {
  const { setToken } = useContext(SubjectContext);
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const goto = useHistory();

  const submitHandler = async (e) => {
    e.preventDefault(e);

    let item = { username, pass };
    try {
      const response = await fetch(
        "https://hassan1245.pythonanywhere.com/accounts/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: pass,
          }),
        }
      );
      const data = await response;
      console.log(data);
      const userToken = await data.json();
      console.log(userToken);
      localStorage.setItem("loginToken", userToken.token);
      // setToken(data.token);
      goto.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="login-form__container">
      <form action="" className="login-form" onSubmit={submitHandler}>
        <h2>Login</h2>
        <div className="form-fields">
          <div className="log-in__input">
            <input
              required
              type="text"
              placeholder="نام کاربری"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="log-in__input">
            <input
              required
              type="password"
              placeholder="رمز"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div className="log-in__submit">
            <input type="submit" value="ورود" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
