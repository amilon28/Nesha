import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Container from "./Components/Container/Container.component";
import Header from "./Components/Header/Header.component";
import Title from "./Components/Title/Title.component";
import heart from "./assets/img/heart.svg";
import loader from "./assets/img/loader.gif";

const Labs = (props) => {
  const [softwares, setSoftwares] = useState([]);
  const [labName, setLabName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const goto = useHistory();

  const fetchSoftwareInfo = (software) => {
    goto.push(`/software/${software.id}`);
  };

  const fetchSoftwares = async () => {
    console.log("are you in");
    const response = await fetch(
      `https://hassan1245.pythonanywhere.com/Nesha/v1/labs/${props.match.params.id}`
    );

    const data = await response.json();
    setSoftwares(data.softwares);
    setLabName(data.lab_name);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchSoftwares();
  }, []);

  return (
    <div>
      <Header type="3" className="type-3" />
      <Container>
        <Title>{labName}</Title>

        {isLoading && <img src={loader} alt="Loading" />}

        <div className="soft__cards">
          {softwares?.map((soft) => {
            return (
              <div
                key={Math.random()}
                className="soft__card"
                onClick={() => fetchSoftwareInfo(soft)}
              >
                <div className="soft__icon">
                  <img src={soft.icon_picture} alt="softIcon" />
                </div>
                <div className="soft__name">{soft.name}</div>
                <div className="soft__likes">
                  <img src={heart} alt="likes" />
                  <span>{soft.likes}</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Labs;
