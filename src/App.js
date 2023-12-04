import { useState } from "react";

import Map from "./components/Map/Map";
import Menu from "./components/Menu/Menu";
import LoopResourceMarks from "./components/Map/LoopResourceMarks";

function App() {
  const [visibility, setVisibility] = useState({
    bank: false,
    goldExport: false,
    goldOre: false,
    ironOre: false,
    stone: false,
  });

  return (
    <div className="row mx-5 my-5">
      <Menu visibility={visibility} setVisibility={setVisibility} />
      <div className="col position-relative">
        <Map />
        <LoopResourceMarks visibility={visibility} />
      </div>
    </div>
  );
}

export default App;
