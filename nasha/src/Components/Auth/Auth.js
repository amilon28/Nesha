import React, { useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { Tabs, Tab } from "@material-ui/core";
import "./Auth.css";
const LOGIN_TAB_VALUE = 1;
const REG_TAB_VALUE = 2;

const Auth = () => {
  const [tab, setTab] = useState(LOGIN_TAB_VALUE);
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

  const validateLogin = (user) => {
    if (!user.username) return "باید حتما نام کاربری را وارد کنید";
    if (!user.password) return "باید حتما پسورد را وارد کنید";
  };

  const validateRegister = (user) => {
    if (!user.username) return "باید حتما نام کاربری را وارد کنید";
    if (!user.email) return "باید حتما ایمیل را وارد کنید";
    if (!user.password) return "باید حتما پسورد را وارد کنید";
    if (user.password !== user.confPassword) return "پسورد ها مشابه نیستند ";
  };

  const regHandler = async (e) => {
    e.preventDefault(e);
    const user = {
      username: usernameReg,
      email: email,
      password: passReg,
      confPassword: confirmPass,
    };
    const error = await validateRegister(user);
    if (error)
      return toast.warn(error, {
        className: "alert",
      });
    user.confPassword = undefined;

    try {
      const response = await fetch(
        "https://hassan1245.pythonanywhere.com/accounts/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("sign up data", data);
        localStorage.setItem("token", data.token);
        toast.success("شما با موفقیت ثبت نام شدید", {
          className: "alert",
        });
        goto.push("/");
      } else {
        toast.error("خطای ارسال", {
          className: "alert",
        });
      }
    } catch (error) {
      // console.log(error.message);
    }
  };

  const loginHandler = async (e) => {
    e.preventDefault(e);

    const user = {
      username: usernameLogin,
      password: passLogin,
    };
    const error = await validateLogin(user);
    if (error)
      return toast.warn(error, {
        className: "alert",
      });

    try {
      const response = await fetch(
        "https://hassan1245.pythonanywhere.com/accounts/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      if (response.ok) {
        const data = await response.json();
        toast.success("شما با موفقیت وارد شدید", { className: "alert" });
        localStorage.setItem("token", data.token);
        goto.push("/");
      } else {
        toast.error("خطا در تایید اطلاعات", {
          className: "alert",
        });
      }
    } catch (error) {}
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
                type="text"
                placeholder="نام کاربری"
                onChange={(e) => setUsernameLogin(e.target.value)}
              />
            </div>
            <div className="log-in__input">
              <input
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
                type="text"
                placeholder="نام کاربری"
                onChange={(e) => setUsernameReg(e.target.value)}
              />
            </div>
            <div className="log-in__input">
              <input
                type="email"
                placeholder="ایمیل"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="log-in__input">
              <input
                type="password"
                placeholder="رمز"
                onChange={(e) => setPassReg(e.target.value)}
              />
            </div>
            <div className="log-in__input">
              <input
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
