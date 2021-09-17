import like from "../../assets/img/heart.svg";
import view from "../../assets/img/view.svg";
import calendar from "../../assets/img/calendar.svg";
import { useContext } from "react";
import { SubjectContext } from "../../store/SubjectContext";
import { useHistory } from "react-router";

const MiddleCard = (props) => {
  const { softwaresInformation, setSoftDetaile } = useContext(SubjectContext);

  const goto = useHistory();
  const getDate = (date) => {
    const time = new Date(date);
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const day = time.getDate();
    return `${year}/${month}/${day}`;
  };

  console.log("softwaresInformation in middle card", softwaresInformation);
  const gotoSoftwareDetailsPage = (targetSoftware) => {
    setSoftDetaile(targetSoftware);
    goto.push("/software");
  };
  return (
    <div>
      {softwaresInformation?.map((software) => {
        return (
          <div
            className="middle-card"
            onClick={() => gotoSoftwareDetailsPage(software)}
          >
            <div className="rigtPart">
              <div className="software__statistics">
                <div className="software__statistics__item">
                  <img src={like} alt="likes" />
                  <span>&nbsp;&nbsp;{software.likes}</span>
                </div>
                <div className="software__statistics__item">
                  <img src={view} alt="views" />
                  <span>&nbsp;&nbsp;{software.views}</span>
                </div>
                <div className="software__statistics__item">
                  <img src={calendar} alt="Date" />
                  <span>&nbsp;&nbsp;{getDate(software.date_submitted)}</span>
                </div>
                <div className="software__statistics__item">
                  <span className="title">Courses:&nbsp;&nbsp;</span>
                  <span>{software.course_links.length}</span>
                </div>
                <div className="software__statistics__item">
                  <span className="title">Reviews:&nbsp;&nbsp;</span>
                  <span>{software.review_links.length}</span>
                </div>
                <div className="software__statistics__item">
                  <span className="title">Labs:&nbsp;&nbsp;</span>
                  <span>{software.labs.length}</span>
                </div>
                <div className="software__statistics__item">
                  <span className="title">Platforms:</span>
                  {software.platforms.map((p) => {
                    return (
                      <span>&nbsp;&nbsp;{p.name}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    );
                  })}
                </div>
                <div className="software__statistics__item">
                  <span className="title">Licenses:</span>
                  {software.licenses.map((l) => {
                    return (
                      <span>&nbsp;&nbsp;{l.name}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    );
                  })}
                </div>
              </div>
              <div className="software__description">
                <p>{software.description}</p>
              </div>
            </div>
            <div className="leftPart">
              <img src={software.icon_picture} alt="Software Icon" />

              <div className="software__url">
                <a href={software.url}>{software.name}</a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MiddleCard;
