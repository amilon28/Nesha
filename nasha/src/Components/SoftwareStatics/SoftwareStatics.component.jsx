import heart from "../../assets/img/heart.svg";
import view from "../../assets/img/view.svg";
import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { SubjectContext } from "../../store/SubjectContext";

const SoftwareStatics = (props) => {
  console.log("Props id", props.id);
  const { numOfLikes, setNumOfLikes } = useContext(SubjectContext);
  const handleLikes = async () => {
    const response = await fetch(
      `https://hassan1245.pythonanywhere.com/Nesha/v1/likes/?software=${props.id}`,
      {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: localStorage.getItem("userToken"),
        },
      }
    );
    const data = await response.json();
    if (!data) return;
    setNumOfLikes(numOfLikes + 1);
  };
  return (
    <div>
      <div className="softwareLikesAndViews">
        <div className="likes-views">
          <div>
            <img
              className="software__icon"
              src={heart}
              alt="heart"
              onClick={() => handleLikes()}
            />
            <span className="score">{numOfLikes}</span>
          </div>
          <div>
            <img className="software__icon" src={view} alt="heart" />
            <span className="score">{props.view}</span>
          </div>
        </div>
        <div className="addSection">
          <Link to="/submit">
            <span>Edit section</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SoftwareStatics;
