import SoftwareDetails from "./Components/SoftwareDetails/SoftwareDetails.component";
import SoftwareDescription from "./Components/SoftwareDescription/SoftwareDescription.component";
import Header from "./Components/Header/Header.component";

import "./software.css";

const Software = () => {
  return (
    <div className="software">
      <Header type="3" className="type-3" nav="true" />
      <SoftwareDetails softwareName="cisco packet tracer" like={15} view={32} />
      <SoftwareDescription description="Packet Tracer is a cross-platform visual simulation tool designed by Cisco Systems that allows users to create network topologies and imitate modern computer networks. The software allows users to simulate the configuration of Cisco routers and switches using a simulated command line interface." />
    </div>
  );
};

export default Software;
