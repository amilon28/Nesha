import { useState } from "react";
import { Route } from "react-router-dom";
import { SubjectContext } from "../src/store/SubjectContext";
import Home from "./Home.page";
import Labs from "./Labs.page";
import Search from "./Search.page";
import Software from "./Software.page";
import Submit from "./Submit.page";
import Fields from "./Fields.page";
import FieldSearch from "./FieldSearch.page";
import LabSearch from "./LabSearch.page";
import LogIn from "./Components/logIn/LogIn.component";
import Signup from "./Components/Signup/Signup.component";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Auth from "./Components/Auth/Auth";
import { BrowserRouter, Redirect, Switch } from "react-router-dom";

function App() {
  const [target, setTarget] = useState("");
  const [subject, setSubject] = useState("");
  const [labSubject, setLabSubject] = useState("");
  const [softSearchTerm, setSoftSearchTerm] = useState("");
  const [softDetaile, setSoftDetaile] = useState();
  const [softwareList, setSoftwareList] = useState();
  const [softawreNameEditSection, setSoftawreNameEditSection] = useState("");
  const [labList, setLabList] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [idLab, setIdLab] = useState("");
  const [refresh, setRefresh] = useState(false);
  // ------------------------------------------------

  return (
    <>
      <SubjectContext.Provider
        value={{
          target,
          setTarget,
          softSearchTerm,
          setSoftSearchTerm,
          subject,
          setSubject,
          labSubject,
          setLabSubject,
          softDetaile,
          setSoftDetaile,
          softwareList,
          setSoftwareList,
          labList,
          setLabList,
          isLogin,
          setIsLogin,
          softawreNameEditSection,
          setSoftawreNameEditSection,
          isEdit,
          setIsEdit,
          idLab,
          setIdLab,
          refresh,
          setRefresh,
        }}
      >
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path={"/login"} component={Auth} />
          <Route exact path="/Lab" component={Labs} />
          <Route exact path="/Field" component={Fields} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/software" component={Software} />
          <Route exact path="/Add" component={Submit} />
          <Route exact path="/field-search" component={FieldSearch} />
          <Route exact path="/lab-search" component={LabSearch} />
        </BrowserRouter>
        <ToastContainer />
      </SubjectContext.Provider>
    </>
  );
}

// const isLogin = () => !!localStorage.getItem("token");

// const PublicRoute = ({ component: Component, ...props }) => {
//   return (
//     <Route
//       {...props}
//       render={(props) => {
//         if (isLogin()) return <Redirect to={"/"} />;
//         else return <Component {...props} />;
//       }}
//     />
//   );
// };

// const PrivateRoute = ({ render, ...props }) => {
//   return (
//     <Route
//       {...props}
//       render={(props) => {
//         if (isLogin()) return render(props);
//         else return <Redirect to={"/login"} />;
//       }}
//     />
//   );
// };

export default App;

// Submit : add page
