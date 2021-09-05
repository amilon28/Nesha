const Feature = (props) => {
  return (
    <div className="featureItem">
      {props.title}: {props.amount}
    </div>
  );
};

export default Feature;
