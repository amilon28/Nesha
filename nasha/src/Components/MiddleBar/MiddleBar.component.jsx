import MiddleCard from "../MiddleCard/MiddleCard.component";

const MiddleBar = (props) => {
  console.log("softwareList in MiddleBar", props.softwares);

  return (
    <div className="middle">
      {!props.softwares &&
        props.softwares.map((software) => {
          return (
            <MiddleCard
              src={software.icon_picture}
              likes={software.likes}
              views={software.views}
              date={software.date_submitted}
              alt="program icon"
            />
          );
        })}
    </div>
  );
};

export default MiddleBar;
