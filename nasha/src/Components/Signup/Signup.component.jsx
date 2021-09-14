import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { SubjectContext } from "../../store/SubjectContext";
import { toast } from "react-toastify";
import "../logIn/LogIn.css";

const Signup = () => {
  const { setToken } = useContext(SubjectContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const goto = useHistory();

  const submitHandler = async (e) => {
    e.preventDefault(e);

    if (!(pass === confirmPass)) {
      alert("passwords dont match");
      return;
    }

    try {
      const response = await fetch(
        "https://hassan1245.pythonanywhere.com/accounts/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            username: username,
            email: email,
            password: pass,
          }),
        }
      );
      const data = await response.json();
      console.log("data in sign up", data);

      const userToken = data.token;
      console.log("userToken signup", userToken);
      localStorage.setItem("signupToken", userToken);
      toast.success("شما با موفقیت ثبت نام شدید", {
        className: "alert",
      });
      goto.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="login-form__container ">
      <form action="" className="login-form sign-up" onSubmit={submitHandler}>
        <h2>Signup</h2>
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
              type="email"
              placeholder="ایمیل"
              onChange={(e) => setEmail(e.target.value)}
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
          <div className="log-in__input">
            <input
              required
              type="password"
              placeholder=" تایید رمز"
              onChange={(e) => setConfirmPass(e.target.value)}
            />
          </div>
          <div className="log-in__submit">
            <input type="submit" value="عضویت" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
