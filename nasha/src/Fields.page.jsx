import { useEffect, useState, useContext } from "react";

import Container from "./Components/Container/Container.component";
import Header from "./Components/Header/Header.component";
import Title from "./Components/Title/Title.component";
import { SubjectContext } from "./store/SubjectContext";

const Fields = () => {
  const { target, isEnterToFieldPage } = useContext(SubjectContext);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [result, setResult] = useState([]);

  const fetchLabsHandler = async () => {
    try {
      const response = await fetch(
        `https://hassan1245.pythonanywhere.com/Nesha/v1/fields/${target.id}`
      );
      if (!response.ok) throw Error("Something went Wrong...");
      const data = await response.json();
      setResult(data.lab_ids);
      console.log(result);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  const fetchLab = async (labId) => {
    console.log("im here in fetch");
    try {
      const response = await fetch(
        `https://hassan1245.pythonanywhere.com/Nesha/v1/labs/${labId}`
      );
      if (!response.ok) throw Error("Something went Wrong...");
      const data = await response.json();
      return (
        <div className="sm-card">
          <div className="lab__name">{data.lab_name}</div>
        </div>
      );
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    if (isEnterToFieldPage) fetchLabsHandler();
  }, []);

  return (
    <div>
      <Header type="3" className="type-3" nav="true" />
      <Container>
        <Title>رشته ها</Title>
        {isLoading && <p className="loading-text">Loading...</p>}
        {!isLoading && error && <p className="error-text">{error}</p>}
        {!isLoading && result.length > 0 && (
          <div className="smallCardList">
            {result.forEach((lab) => fetchLab(lab.lab_id))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Fields;
