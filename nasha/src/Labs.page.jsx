import { useContext } from "react/cjs/react.development";
import Container from "./Components/Container/Container.component";
import Header from "./Components/Header/Header.component";
import Title from "./Components/Title/Title.component";
import { useHistory } from "react-router";
import { SubjectContext } from "./store/SubjectContext";

import heart from "./assets/img/heart.svg";

const Labs = () => {
  const { target, setTarget, labSubject } = useContext(SubjectContext);
  const goto = useHistory();
  const fetchSoftwareInfo = async (software) => {
    const response = await fetch(
      `https://hassan1245.pythonanywhere.com/Nesha/v1/softwares/${software.id}`
    );

    const data = await response.json();

    setTarget(data);
    goto.push("/software");
  };

  return (
    <div>
      <Header type="3" className="type-3" />
      <Container>
        <Title>{labSubject ? labSubject : `آزمایشگاه ها`}</Title>
        {/* <Title>آزمایشگاه ها</Title> */}
        {target.length === 0 && (
          <p className="error-text">{`No Software Found :(`}</p>
        )}
        <div className="soft__cards">
          {target &&
            target.map((soft) => {
              return (
                <div
                  className="soft__card"
                  onClick={() => fetchSoftwareInfo(soft)}
                >
                  <div className="soft__icon">
                    <img
                      src={
                        `https://hassan1245.pythonanywhere.com/media/` +
                        soft.icon_picture
                      }
                      alt="softIcon"
                    />
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
