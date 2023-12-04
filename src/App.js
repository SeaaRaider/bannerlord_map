import { useState } from "react";
import {
  Routes,
  Route
} from "react-router-dom";

import SomeMap from "./pages/SomeMap/Map";
import GofurkMap from "./pages/GofurkMap/Map";
import Map from "./components/Map/Map";
import Menu from "./components/Menu/Menu";
import MapNavbar from "./components/MapNavbar/MapNavbar";

function App() {
  const [visibility, setVisibility] = useState({
    bank: false,
    goldExport: false,
    goldOre: false,
    ironOre: false,
    stone: false,
  });

  return (
    <div className="row mx-3 my-3">
      <MapNavbar/>
      <Menu visibility={visibility} setVisibility={setVisibility} />
      <div className="col position-relative">
        <Routes>
          <Route path="/" element={<Map visibility={visibility}/>}/>
          <Route path="/Gofurk" element={<GofurkMap visibility={visibility}/>}/>
          <Route path="/SomeMap" element={<SomeMap visibility={visibility}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
