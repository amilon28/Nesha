import LeftBar from "../LeftBar/LeftBar.component";
import MiddleBar from "../MiddleBar/MiddleBar.component";
import RightBar from "../RightBar/RightBar.component";

import "./SearchContainer.style.css";

const SearchContainer = () => {
  return (
    <div className="searchcontainer">
      <LeftBar />
      <MiddleBar />
      <RightBar />
    </div>
  );
};

export default SearchContainer;
