import Feature from "../Feature/Feature.component";

const FeatureList = () => {
  return (
    <div className="featureList">
      <Feature title="views" amount="56" />
      <Feature title="likes" amount="64" />
      <Feature title="courses" amount="4" />
    </div>
  );
};

export default FeatureList;
