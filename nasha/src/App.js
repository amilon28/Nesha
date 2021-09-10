import { Route } from "react-router-dom";
import Home from "./Home.page";
import Labs from "./Labs.page";
import Search from "./Search.page";
import Software from "./Software.page";
import Submit from "./Submit.page";
import Fields from "./Fields.page";

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/Lab" component={Labs} />
      <Route exact path="/Field" component={Fields} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/software" component={Software} />
      <Route exact path="/submit" component={Submit} />
    </div>
  );
}

export default App;

// Submit : add page
