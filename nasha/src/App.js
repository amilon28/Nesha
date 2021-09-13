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

function App() {
  const [target, setTarget] = useState("");
  const [subject, setSubject] = useState("");
  const [labSubject, setLabSubject] = useState("");
  const [isEnterToFieldPage, setIsEnterToFieldPage] = useState(false);
  const [softDetaile, setSoftDetaile] = useState();
  const [softwareList, setSoftwareList] = useState();
  // const [token, setToken] = useState("");
  const [labList, setLabList] = useState("");
  return (
    <div>
      <SubjectContext.Provider
        value={{
          target,
          setTarget,
          isEnterToFieldPage,
          setIsEnterToFieldPage,
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
        }}
      >
        <Route exact path="/" component={Home} />
        <Route exact path="/Lab" component={Labs} />
        <Route exact path="/Field" component={Fields} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/software" component={Software} />
        <Route exact path="/submit" component={Submit} />
        <Route exact path="/field-search" component={FieldSearch} />
        <Route exact path="/lab-search" component={LabSearch} />
        <Route exact path="/log-in" component={LogIn} />
        <Route exact path="/sign-up" component={Signup} />
      </SubjectContext.Provider>
    </div>
  );
}

export default App;

// Submit : add page
