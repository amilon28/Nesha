import { useState } from "react";
import SoftwareDetails from "./Components/SoftwareDetails/SoftwareDetails.component";
import SoftwareDescription from "./Components/SoftwareDescription/SoftwareDescription.component";
import Header from "./Components/Header/Header.component";
import Snapshot from "./Components/Snapshot/Snapshot.component";
import Reviews from "./Components/Reviews/Reviews.component";
import { useContext } from "react/cjs/react.development";
import { SubjectContext } from "./store/SubjectContext";

import "./software.css";

const Software = () => {
  const { softDetaile } = useContext(SubjectContext);
  const [softwareDetaile, setsoftwareDetaile] = useState(softDetaile);
  console.log(softwareDetaile);
  return (
    <div className="software">
      <Header type="3" className="type-3" />
      <SoftwareDetails
        softwareName={softwareDetaile.name}
        softwareIcon={softwareDetaile.icon_picture}
        like={softwareDetaile.likes}
        view={softwareDetaile.views}
      />
      <SoftwareDescription description={softwareDetaile.description} />
      <Snapshot
        url={softwareDetaile.url}
        licenses={softwareDetaile.licenses}
        date={softwareDetaile.date_submitted}
        courseLinks={softwareDetaile.course_links}
        reviewlinks={softwareDetaile.review_links}
        platforms={softwareDetaile.platforms}
        labs={softwareDetaile.labs}
        snapShots={[
          softwareDetaile.snapshot1,
          softwareDetaile.snapshot2,
          softwareDetaile.snapshot3,
          softwareDetaile.snapshot4,
          softwareDetaile.snapshot5,
        ]}
      />
      <Reviews soft_id={softDetaile.id} />
    </div>
  );
};

export default Software;
