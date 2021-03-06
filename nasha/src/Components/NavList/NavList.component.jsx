import { useEffect } from "react";
import NavItem from "../NavItem/NavItem.component";
import hamburger from "../../assets/img/hamburger-menu.svg";
import { useHistory } from "react-router";
import { useContext } from "react/cjs/react.development";
import { SubjectContext } from "../../store/SubjectContext";
import { toast } from "react-toastify";
import "../NavBar/NavBar.style.css";

const NavList = (props) => {
  const goto = useHistory();
  const { isLogin, setIsLogin } = useContext(SubjectContext);

  const logoutHandler = async () => {
    localStorage.clear();
    setIsLogin(!isLogin);

    toast.success("خارج شدید", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 2000,
      className: "foo-bar",
    });
    const response = await fetch(
      "https://hassan1245.pythonanywhere.com/accounts/logout/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      }
    );

    const data = await response.json();

    goto.push("/");
  };

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
        <NavItem goto="/search" text="افزودن" />
        {isLogin && (
          <button
            style={{
              width: 80,
              height: 35,
              borderRadius: "10px",
              backgroundColor: "#2f60ff",
              color: "#fff",
              fontSize: "20px",
              border: 0,
              cursor: "pointer",
              fontFamily: "Parstoo",
            }}
            onClick={logoutHandler}
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
              fontFamily: "Parstoo",
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
