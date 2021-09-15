import heart from "../../assets/img/heart.svg";
import view from "../../assets/img/view.svg";
import { Link } from "react-router-dom";
import { useContext, useState } from "react/cjs/react.development";
import { SubjectContext } from "../../store/SubjectContext";

const SoftwareStatics = (props) => {
  console.log("Props id", props.id);
  const { numOfLikes, setNumOfLikes, setSoftawreNameEditSection, setIsEdit } =
    useContext(SubjectContext);
  const [softwareLikes, setSoftwareLikes] = useState(props.like);
  const [isLike, setIsLike] = useState(false);
  const handleLikes = async () => {
    const response = await fetch(
      `https://hassan1245.pythonanywhere.com/Nesha/v1/likes/?software=${props.id}`,
      {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Token " + localStorage.getItem("token"),
        },
      }
    );
    const data = await response.json();
    console.log("Like data", data);
    if (!data) return;
    if (!localStorage.getItem("token") && !isLike) {
      setSoftwareLikes(numOfLikes + 1);
      setIsLike(true);
    }
  };
  return (
    <div>
      <div className="softwareLikesAndViews">
        <div className="likes-views">
          <div onClick={() => handleLikes()}>
            <img className="software__icon" src={heart} alt="heart" />
            <span className="score">{softwareLikes}</span>
          </div>
          <div>
            <img className="software__icon" src={view} alt="heart" />
            <span className="score">{props.view}</span>
          </div>
        </div>
        <div className="addSection">
          <Link to="/Add">
            <span
              onClick={() => {
                setSoftawreNameEditSection(props.softwareName);
                setIsEdit(true);
              }}
            >
              Edit section
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SoftwareStatics;
