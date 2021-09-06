import heart from "../../assets/img/heart.svg";
import view from "../../assets/img/view.svg";
import { Link } from "react-router-dom";

const SoftwareStatics = (props) => {
  return (
    <div>
      <div className="softwareLikesAndViews">
        <div className="likes-views">
          <div>
            <img className="software__icon" src={heart} alt="heart" />
            <span className="score">{props.like}</span>
          </div>
          <div>
            <img className="software__icon" src={view} alt="heart" />
            <span className="score">{props.view}</span>
          </div>
        </div>
        <div className="addSection">
          <Link to="/submit">
            <span>Edit/Add section</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SoftwareStatics;
