import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { SubjectContext } from "../../store/SubjectContext";
import { toast } from "react-toastify";
import { Tabs, Tab } from "@material-ui/core";
import "./Auth.css";
const LOGIN_TAB_VALUE = 1;
const REG_TAB_VALUE = 2;

const Auth = () => {
  const [tab, setTab] = useState(LOGIN_TAB_VALUE);
  const { setToken } = useContext(SubjectContext);
  const [usernameLogin, setUsernameLogin] = useState("");
  const [usernameReg, setUsernameReg] = useState("");
  const [email, setEmail] = useState("");
  const [passLogin, setPassLogin] = useState("");
  const [passReg, setPassReg] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const goto = useHistory();

  const handleChangeTab = (e, newValue) => {
    setTab(newValue);
  };

  const regHandler = async (e) => {
    e.preventDefault(e);

    if (!(passReg === confirmPass)) {
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
            username: usernameReg,
            email: email,
            password: passReg,
          }),
        }
      );
      const data = await response;

      const userToken = await data.json();
      console.log(userToken);
      localStorage.setItem("token", userToken.token);
      toast.success("شما با موفقیت ثبت نام شدید", {
        className: "alert",
      });
      goto.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const loginHandler = async (e) => {
    e.preventDefault(e);

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
            username: usernameLogin,
            password: passLogin,
          }),
        }
      );
      const data = await response;
      console.log(data);
      const userToken = await data.json();
      console.log(userToken);
      localStorage.setItem("token", userToken.token);
      // setToken(data.token);
      toast.success("شما با موفقیت وارد شدید", {
        className: "alert",
      });
      goto.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="login-form__container">
      <Tabs
        value={tab}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChangeTab}
        aria-label="disabled tabs example"
      >
        <Tab
          label="ورود"
          value={LOGIN_TAB_VALUE}
          style={{ flex: 1, fontFamily: "Parastoo", fontSize: 16 }}
        />
        <Tab
          label="ثبت نام"
          value={REG_TAB_VALUE}
          style={{ flex: 1, fontFamily: "Parastoo", fontSize: 16 }}
        />
      </Tabs>
      {tab === LOGIN_TAB_VALUE && (
        <form action="" className="login-form" onSubmit={loginHandler}>
          <h2>Login</h2>
          <div className="form-fields">
            <div className="log-in__input">
              <input
                required
                type="text"
                placeholder="نام کاربری"
                onChange={(e) => setUsernameLogin(e.target.value)}
              />
            </div>
            <div className="log-in__input">
              <input
                required
                type="password"
                placeholder="رمز"
                onChange={(e) => setPassLogin(e.target.value)}
              />
            </div>
            <div className="log-in__submit">
              <input type="submit" value="ورود" />
            </div>
          </div>
        </form>
      )}
      {tab === REG_TAB_VALUE && (
        <form action="" className="login-form sign-up" onSubmit={regHandler}>
          <h2>Signup</h2>
          <div className="form-fields">
            <div className="log-in__input">
              <input
                required
                type="text"
                placeholder="نام کاربری"
                onChange={(e) => setUsernameReg(e.target.value)}
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
                onChange={(e) => setPassReg(e.target.value)}
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
      )}
    </div>
  );
};

export default Auth;
