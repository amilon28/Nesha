import Feature from "../Feature/Feature.component";

const FeatureList = (props) => {
  return (
    <div className="featureList">
      <Feature
        title="views"
        views={props.views}
        likes={props.likes}
        date={props.date}
      />
    </div>
  );
};

export default FeatureList;
