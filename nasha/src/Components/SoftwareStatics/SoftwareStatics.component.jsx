import heart from "../../assets/img/heart.svg";
import view from "../../assets/img/view.svg";
import { Link } from "react-router-dom";
import { useContext, useState } from "react/cjs/react.development";
import { SubjectContext } from "../../store/SubjectContext";
import { toast } from "react-toastify";

const SoftwareStatics = (props) => {
  console.log("Props soft id", props.id);
  const { setSoftawreNameEditSection, setIsEdit } = useContext(SubjectContext);

  const [numOfLike, setNumOfLike] = useState(props.like);

  const [isLiked, setIsLiked] = useState(false);

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
    const data = await response;
    console.log("respinse Like data", data);

    if (!(localStorage.getItem("token") === null) && !isLiked) {
      setNumOfLike(numOfLike + 1);
      setIsLiked(true);
      console.log("liked");
    }

    if (!(localStorage.getItem("token") === null) && isLiked) {
      setNumOfLike(numOfLike - 1);
      setIsLiked(false);
      console.log("disliked");
    }

    if (data.detail === "Invalid token.") {
      toast.warn("ابتدا ثبت نام یا ورود کنید", {
        className: "alert",
      });
      return;
    }
  };
  return (
    <div>
      <div className="softwareLikesAndViews">
        <div className="likes-views">
          <div onClick={() => handleLikes()}>
            <img className="software__icon" src={heart} alt="heart" />
            <span className="score">{numOfLike}</span>
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
