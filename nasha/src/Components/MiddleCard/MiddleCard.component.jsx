import FeatureList from "../FeatureList/FeatureList.component";

const MiddleCard = (props) => {
  console.log("date in MiddleCard Comp", props.date);
  return (
    <div className="middle-card">
      <FeatureList likes={props.likes} views={props.views} date={props.date} />
      <img src={props.src} alt={props.alt} className="middle-card__icon" />
    </div>
  );
};

export default MiddleCard;
