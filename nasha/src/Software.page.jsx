import { useEffect, useState } from "react";
import SoftwareDetails from "./Components/SoftwareDetails/SoftwareDetails.component";
import SoftwareDescription from "./Components/SoftwareDescription/SoftwareDescription.component";
import Header from "./Components/Header/Header.component";
import Snapshot from "./Components/Snapshot/Snapshot.component";
import Reviews from "./Components/Reviews/Reviews.component";
import Title from "./Components/Title/Title.component";

import "./software.css";

const Software = (props) => {
  const [softwareDetails, setsoftwareDetails] = useState();
  const [comments, setComments] = useState([]);

  const fetchSoftwareInfo = async () => {
    const response = await fetch(
      `https://hassan1245.pythonanywhere.com/Nesha/v1/softwares/${props.match.params.id}`
    );

    const data = await response.json();

    setsoftwareDetails(data);
  };

  const fetchComments = async () => {
    const response = await fetch(
      `https://hassan1245.pythonanywhere.com/Nesha/v1/${softwareDetails?.id}/children/?page=1`
    );

    const data = await response.json();
    setComments(data.results);
  };

  useEffect(() => {
    fetchSoftwareInfo();
    fetchComments();
  }, []);

  return (
    <div className="software">
      <Header type="3" className="type-3" />
      <SoftwareDetails
        softwareName={softwareDetails?.name}
        softwareIcon={softwareDetails?.icon_picture}
        like={softwareDetails?.likes}
        view={softwareDetails?.views}
        id={softwareDetails?.id}
        plats={softwareDetails?.platforms}
        lice={softwareDetails?.licenses}
      />
      <SoftwareDescription description={softwareDetails?.description} />
      <Snapshot
        url={softwareDetails?.url}
        licenses={softwareDetails?.licenses}
        date={softwareDetails?.date_submitted}
        courseLinks={softwareDetails?.course_links}
        reviewlinks={softwareDetails?.review_links}
        platforms={softwareDetails?.platforms}
        labs={softwareDetails?.labs}
        snapShots={[
          softwareDetails?.snapshot1,
          softwareDetails?.snapshot2,
          softwareDetails?.snapshot3,
          softwareDetails?.snapshot4,
          softwareDetails?.snapshot5,
        ]}
        pdf={softwareDetails?.pdf_file}
      />
      <>
        <Title className="reviews-title">Reviews</Title>
        <Reviews soft_id={softwareDetails?.id} comments={comments} />
      </>
    </div>
  );
};

export default Software;
