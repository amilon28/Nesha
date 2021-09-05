import Card from "../Card/Card.component";
import "./CardList.style.css";

const CardList = () => {
  return (
    <div className="cards">
      <Card text="C++" />
      <Card text="Java" />
      <Card text="Xilinx" />
      <Card text="Python" />
      <Card text="Ruby" />
      <Card text="PHP" />
    </div>
  );
};

export default CardList;
