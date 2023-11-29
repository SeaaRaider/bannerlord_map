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

  const resourceHandler = (i) => {
    if (i == "0") {
      setVisibility({
        ...visibility,
        bank: true,
      });
      if (visibility.bank) {
        setVisibility({
          ...visibility,
          bank: false,
        });
      }
    }
    if (i == "1") {
      setVisibility({
        ...visibility,
        goldExport: true,
      });
      if (visibility.goldExport) {
        setVisibility({
          ...visibility,
          goldExport: false,
        });
      }
    }
    if (i == "2") {
      setVisibility({
        ...visibility,
        goldOre: true,
      });
      if (visibility.goldOre) {
        setVisibility({
          ...visibility,
          goldOre: false,
        });
      }
    }
    if (i == "3") {
      setVisibility({
        ...visibility,
        ironOre: true,
      });
      if (visibility.ironOre) {
        setVisibility({
          ...visibility,
          ironOre: false,
        });
      }
    }
    if (i == "4") {
      setVisibility({
        ...visibility,
        stone: true,
      });
      if (visibility.stone) {
        setVisibility({
          ...visibility,
          stone: false,
        });
      }
    }
  };

  return (
    <div className="row mx-5 my-5">
      <Menu resourceHandler={resourceHandler} />
      <div className="col position-relative">
        <Map />
        <LoopResourceMarks visibility={visibility} />
      </div>
    </div>
  );
}

export default App;
