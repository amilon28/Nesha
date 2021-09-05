import "./Line.style.css";

const Line = (props) => {
  const classes = "line " + props.className;
  return <div className={classes}></div>;
};

export default Line;
