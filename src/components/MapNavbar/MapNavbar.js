import { Link } from "react-router-dom"

import PathConstants from "../../routes/pathConstants";
import classes from "./MapNavbar.module.css";

function MapNavbar() {
  return (
    <ul className={classes.menuBar}>
      <li><Link to={PathConstants.GOFURK}>GOFURK</Link></li>
      <li><Link to={PathConstants.VASCONGADAS}>VASCONGADAS</Link></li>
    </ul>
  );
}

export default MapNavbar;
