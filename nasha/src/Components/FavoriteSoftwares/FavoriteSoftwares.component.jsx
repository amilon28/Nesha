import Container from "../Container/Container.component";
import Title from "../Title/Title.component";
import CardList from "../CardList/CardList.component";
import { useEffect, useState } from "react";

const FavoriteSoftwares = () => {
  const [softwares, setSoftwares] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSoftwaresHandler = async function () {
    try {
      const response = await fetch(
        "https://hassan1245.pythonanywhere.com/Nesha/v1/softwares/?likes=dessc&page=1"
      );
      if (!response.ok) {
        throw Error("Something went wrong...");
      }
      const data = await response.json();
      setSoftwares(data.results);
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchSoftwaresHandler();
  }, []);

  return (
    <Container className="big-height">
      <Title>نرم افزار های محبوب</Title>
      {isLoading && <p className="loading-text">Loading...</p>}
      {!isLoading && error && <p className="error-text">{error}</p>}
      {!isLoading && !error && softwares.length > 0 && (
        <CardList softWareList={softwares} />
      )}
    </Container>
  );
};

export default FavoriteSoftwares;
