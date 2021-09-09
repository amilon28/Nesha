import "../MostRelatedSoftwares/MostRelatedSoftwares.style.css";

const MostRelatedSoftwareItem = (props) => {
  return (
    <div className="MostRelatedSoftware__item" id={props.key}>
      {props.children}
    </div>
  );
};

export default MostRelatedSoftwareItem;
