import "./header.styles.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="careers">
        <Link to="/Careers">Careers</Link>
      </div>
    </div>
  );
};

export default Header;
