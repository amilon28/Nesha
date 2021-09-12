import Feature from "../Feature/Feature.component";

const FeatureList = (props) => {
  return (
    <div className="featureList">
      <Feature title="views" amount={props.views} />
      <Feature title="likes" amount={props.likes} />
      <Feature title="Date" amount={props.date} />
    </div>
  );
};

export default FeatureList;
