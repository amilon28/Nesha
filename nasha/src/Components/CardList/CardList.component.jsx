import Card from "../Card/Card.component";
import "./CardList.style.css";

const CardList = (props) => {
  console.log(props.softWareList);
  return (
    <div className="cards">
      {props.softWareList.map((soft) => (
        <Card
          title={soft.name}
          icon={soft.icon_picture}
          numOfLikes={soft.likes}
          numOfViews={soft.views}
          key={soft.id}
        />
      ))}
    </div>
  );
};

export default CardList;
