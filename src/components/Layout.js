import { Outlet } from "react-router-dom";

import Menu from "./Menu/Menu";
import MapNavbar from "./MapNavbar/MapNavbar";

export default function Layout({visibility, setVisibility}) {

  return (
    <div className="row mx-0 my-2">
      <MapNavbar />
      <Menu visibility={visibility} setVisibility={setVisibility} />
      <div className="col position-relative">
        <Outlet />
      </div>
    </div>
  );
}
