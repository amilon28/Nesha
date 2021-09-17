import { useEffect, useState } from "react";
import SoftwareDetails from "./Components/SoftwareDetails/SoftwareDetails.component";
import SoftwareDescription from "./Components/SoftwareDescription/SoftwareDescription.component";
import Header from "./Components/Header/Header.component";
import Snapshot from "./Components/Snapshot/Snapshot.component";
import Reviews from "./Components/Reviews/Reviews.component";
import Title from "./Components/Title/Title.component";

import "./software.css";

const Software = (props) => {
  const [softwareDetaile, setsoftwareDetaile] = useState();
  const [comments, setComments] = useState([]);

  const fetchSoftwareInfo = async () => {
    const response = await fetch(
      `https://hassan1245.pythonanywhere.com/Nesha/v1/softwares/${props.match.params.id}`
    );

    const data = await response.json();

    setsoftwareDetaile(data);
    console.log("setsoftwareDetaile in 23", softwareDetaile);
  };

  const fetchComments = async () => {
    const response = await fetch(
      `https://hassan1245.pythonanywhere.com/Nesha/v1/${softwareDetaile?.id}/children/?page=1`
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
        softwareName={softwareDetaile?.name}
        softwareIcon={softwareDetaile?.icon_picture}
        like={softwareDetaile?.likes}
        view={softwareDetaile?.views}
        id={softwareDetaile?.id}
      />
      <SoftwareDescription description={softwareDetaile?.description} />
      <Snapshot
        url={softwareDetaile?.url}
        licenses={softwareDetaile?.licenses}
        date={softwareDetaile?.date_submitted}
        courseLinks={softwareDetaile?.course_links}
        reviewlinks={softwareDetaile?.review_links}
        platforms={softwareDetaile?.platforms}
        labs={softwareDetaile?.labs}
        snapShots={[
          softwareDetaile?.snapshot1,
          softwareDetaile?.snapshot2,
          softwareDetaile?.snapshot3,
          softwareDetaile?.snapshot4,
          softwareDetaile?.snapshot5,
        ]}
        pdf={softwareDetaile?.pdf_file}
      />
      <>
        <Title className="reviews-title">Reviews</Title>
        <Reviews soft_id={softwareDetaile?.id} comments={comments} />
      </>
    </div>
  );
};

export default Software;
