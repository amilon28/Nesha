import { useState, useEffect } from "react";
import MostRelatedSoftwareList from "../MostRelatedSoftwareList/MostRelatedSoftwareList.component";
import Container from "../Container/Container.component";
import Title from "../Title/Title.component";
import loader from "../../assets/img/loader.gif";

import "./MostRelatedSoftwares.style.css";

const MostRelatedSoftware = () => {
  const [fields, setFields] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFieldsHandler = async () => {
    try {
      const response = await fetch(
        "https://hassan1245.pythonanywhere.com/Nesha/v1/fields/"
      );
      if (!response.ok) throw Error("Something Went Wrong...");
      const data = await response.json();
      console.log("fields in home ...", data);
      setFields(data.results);
      console.log("Fields ----> ", fields);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFieldsHandler();
  }, []);

  return (
    <Container className="mostSoftWares">
      <Title>بیشترین نرم افزار ها مربوط به کدام رشته ها هستند ؟</Title>

      {/* {isLoading && <p className="loading-text">Loading...</p>} */}
      {isLoading && <img src={loader} alt="Loading" />}
      {!isLoading && error && <p className="error-text">{error}</p>}
      {!isLoading && !error && fields.length > 0 && (
        <MostRelatedSoftwareList fieldsList={fields} />
      )}
    </Container>
  );
};

export default MostRelatedSoftware;
