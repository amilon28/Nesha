import FeatureList from "../FeatureList/FeatureList.component";

const MiddleCard = (props) => {
  return (
    <div className="middle-card">
      <FeatureList />
      <img src={props.src} alt={props.alt} className="middle-card__icon" />
    </div>
  );
};

export default MiddleCard;
