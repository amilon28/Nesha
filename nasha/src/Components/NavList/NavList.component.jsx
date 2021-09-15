import { useEffect, useState } from "react";
import NavItem from "../NavItem/NavItem.component";
import { Button } from "@material-ui/core";
import hamburger from "../../assets/img/hamburger-menu.svg";
import "../NavBar/NavBar.style.css";
import { useHistory } from "react-router";
import { useContext } from "react/cjs/react.development";
import { SubjectContext } from "../../store/SubjectContext";
import { toast } from "react-toastify";

// const isLogin = () => !!localStorage.getItem("token");

const NavList = (props) => {
  const goto = useHistory();
  const { isLogin, setIsLogin } = useContext(SubjectContext);
  // const [isLogin, setIsLogin] = useState(!!localStorage.getItem("token"));
  useEffect(() => {
    setIsLogin(!!localStorage.getItem("token"));
  }, []);
  if (props.type === "head") {
    return (
      <>
        <ul className="navbar__list">
          <NavItem goto="/" text="خانه" />
          <NavItem goto="/search" text="جستجوی نرم افزار" />
          <NavItem goto="/Add" text="اضافه کردن" />
          <NavItem goto="/field-search" text="رشته ها" />
          <NavItem goto="/lab-search" text="آزمایشگاه ها" />
          {/* <NavItem to="/fields"  text="رشته ها" /> */}
          <li className="navbar__item">
            <img
              src={hamburger}
              alt="hamburger"
              className="navbar__item--icon"
            />
          </li>
        </ul>
      </>
    );
  } else {
    return (
      <ul className="navbar__list">
        {/* <NavItem goto="/" text="خانه" />
        <NavItem goto="/" text="درباره ما" /> */}
        <NavItem goto="/search" text="افزودن" />
        {isLogin && (
          <button
            onClick={() => {
              localStorage.clear();
              setIsLogin(!isLogin);
              goto.push("/");
              console.log(localStorage);
              toast.success("خارج شدید", {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1500,
                className: "foo-bar",
              });
            }}
            style={{
              width: 80,
              height: 35,
              borderRadius: "10px",
              backgroundColor: "#2f60ff",
              color: "#fff",
              fontSize: "20px",
              border: 0,
              cursor: "pointer",
            }}
          >
            خروج
          </button>
        )}
        {!isLogin && (
          <button
            onClick={() => {
              goto.push("/login");
            }}
            style={{
              height: 35,
              borderRadius: "10px",
              backgroundColor: "#2f60ff",
              color: "#fff",
              fontSize: "20px",
              border: 0,
              cursor: "pointer",
              padding: "5px 15px",
            }}
          >
            ورود/ ثبت نام
          </button>
        )}
      </ul>
    );
  }
};

export default NavList;
