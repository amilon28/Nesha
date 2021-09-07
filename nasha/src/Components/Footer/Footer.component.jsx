import NavList from "../NavList/NavList.component";
import Line from "../Line/Line.component";

import "./Footer.style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <NavList className="navbar__item--footer" />
      <Line className="line--footer" />
      <p className="footer__copyRight">
        1717 Harrison St, San Francisco, CA 94103, USA <br />
        &copy; HOOH alrights reserved
      </p>
    </footer>
  );
};

export default Footer;
