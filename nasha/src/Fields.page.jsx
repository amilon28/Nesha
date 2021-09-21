import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Container from "./Components/Container/Container.component";
import Header from "./Components/Header/Header.component";
import Title from "./Components/Title/Title.component";

const Fields = (props) => {
  const [response, setResponse] = useState();
  const [fieldName, setFieldName] = useState("");
  const goto = useHistory();

  const fetchLab = async () => {
    try {
      const response = await fetch(
        `https://hassan1245.pythonanywhere.com/Nesha/v1/fields/${props.match.params.id}`
      );
      if (!response.ok) throw Error("Opps. sth is wrong!");
      const data = await response.json();
      setResponse(data.labs);
      setFieldName(data.field_name);
    } catch (err) {}
  };

  const fetchcorrespondingSoftwareHandler = async (lab) => {
    goto.push(`/Lab/${lab.id}`);
  };

  useEffect(() => {
    fetchLab();
  }, []);

  return (
    <div>
      <Header type="3" className="type-3" />
      <Container className="fields-page">
        <Title>{fieldName}</Title>
        <div className="smallCardList">
          {response && (
            <div className="sm-card">
              {response.map((lab) => (
                <div
                  key={Math.random()}
                  onClick={() => fetchcorrespondingSoftwareHandler(lab)}
                  className="lab__name"
                >
                  {lab.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Fields;
