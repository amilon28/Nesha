import { useState } from "react";
import { Route } from "react-router-dom";
import Home from "./Home.page";
import Labs from "./Labs.page";
import Search from "./Search.page";
import Software from "./Software.page";
import Submit from "./Submit.page";
import Fields from "./Fields.page";
import { SubjectContext } from "../src/store/SubjectContext";

function App() {
  const [target, setTarget] = useState("");
  const [isEnterToFieldPage, setIsEnterToFieldPage] = useState(false);
  return (
    <div>
      <SubjectContext.Provider
        value={{ target, setTarget, isEnterToFieldPage, setIsEnterToFieldPage }}
      >
        <Route exact path="/" component={Home} />
        <Route exact path="/Lab" component={Labs} />
        <Route exact path="/Field" component={Fields} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/software" component={Software} />
        <Route exact path="/submit" component={Submit} />
      </SubjectContext.Provider>
    </div>
  );
}

export default App;

// Submit : add page
