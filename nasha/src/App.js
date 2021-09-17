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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Auth from "./Components/Auth/Auth";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [softSearchTerm, setSoftSearchTerm] = useState("");
  const [softwareList, setSoftwareList] = useState();
  const [softawreNameEditSection, setSoftawreNameEditSection] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [softwaresInformation, setSoftwaresInformation] = useState();
  // ------------------------------------------------

  return (
    <>
      <SubjectContext.Provider
        value={{
          softSearchTerm,
          setSoftSearchTerm,
          softwareList,
          setSoftwareList,
          isLogin,
          setIsLogin,
          softawreNameEditSection,
          setSoftawreNameEditSection,
          isEdit,
          setIsEdit,
          softwaresInformation,
          setSoftwaresInformation,
        }}
      >
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path={"/login"} component={Auth} />
          <Route exact path="/Lab/:id" component={Labs} />
          <Route exact path="/Field/:id" component={Fields} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/software/:id" component={Software} />
          <Route exact path="/Add" component={Submit} />
          <Route exact path="/field-search" component={FieldSearch} />
          <Route exact path="/lab-search" component={LabSearch} />
        </BrowserRouter>
        <ToastContainer />
      </SubjectContext.Provider>
    </>
  );
}

export default App;
