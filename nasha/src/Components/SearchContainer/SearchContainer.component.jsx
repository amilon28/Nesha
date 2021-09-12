import LeftBar from "../LeftBar/LeftBar.component";
import MiddleBar from "../MiddleBar/MiddleBar.component";
import RightBar from "../RightBar/RightBar.component";

import "./SearchContainer.style.css";

const SearchContainer = (props) => {
  return (
    <div className="searchcontainer">
      <LeftBar />
      <MiddleBar softwares={props.softwares} />
      <RightBar />
    </div>
  );
};

export default SearchContainer;
