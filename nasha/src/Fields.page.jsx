import { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";

import Container from "./Components/Container/Container.component";
import Header from "./Components/Header/Header.component";
import Title from "./Components/Title/Title.component";
import { SubjectContext } from "./store/SubjectContext";

const Fields = () => {
  const { target, setTarget, subject, setLabSubject, labList, setSoftDetaile } =
    useContext(SubjectContext);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState();
  const goto = useHistory();
  // console.log("target in field page", target);
  const fetchLab = () => {
    // console.log("target in field page", target);
    // console.log("Lab id:", labId);
    // const response = await fetch(
    //   `https://hassan1245.pythonanywhere.com/Nesha/v1/labs/${labId}`
    // );
    // const data = await response.json();
    // console.log("Response: ", data);
    // setResponse(data.labs);
    // //
    // // <div className="sm-card">
    // //   <div className="lab__name">{data.lab_name}</div>
    // // </div>
    // // ;
    setResponse(labList);
  };

  const fetchcorrespondingSoftwareHandler = async (lab) => {
    const response = await fetch(
      `https://hassan1245.pythonanywhere.com/Nesha/v1/labs/${lab.id}`
    );

    const data = await response.json();
    console.log("response of data in Field", data);
    setTarget(data.softwares);
    setLabSubject(lab.name);
    goto.push("/Lab");
  };

  useEffect(() => {
    fetchLab();
  }, []);

  return (
    <div>
      <Header type="3" className="type-3" />
      <Container className="fields-page">
        <Title> {subject ? subject : "رشته ها"}</Title>
        {/* <Title>رشته ها</Title> */}
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
