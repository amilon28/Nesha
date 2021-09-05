import "./Title.style.css";
const Title = (props) => {
  const classes = "font " + props.className;
  return <h2 className={classes}>{props.children}</h2>;
};

export default Title;
