import { useContext, useEffect, useState } from "react";
import MiddleCard from "../MiddleCard/MiddleCard.component";
import loader from "../../assets/img/loader.gif";
import { SubjectContext } from "../../store/SubjectContext";

const MiddleBar = () => {
  const { softwaresInformation } = useContext(SubjectContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [softwaresInformation]);

  return (
    <div className="middle">
      {isLoading && <img src={loader} alt="Loading" />}
      {!isLoading && <MiddleCard />}
    </div>
  );
};

export default MiddleBar;
