import { useState } from "react";

import { RESOURCES_DATA } from "./resourceData";

import Map from "./components/Map/Map";
import Menu from "./components/Menu/Menu";
import LoopResourceMarks from "./components/Map/LoopResourceMarks";

function App() {
  const [bank, setBankIsOpen] = useState(true);
  const [gold_bar, setGold_barIsOpen] = useState(true);
  const [gold_ore, setGold_oreIsOpen] = useState(true);
  const [iron_ore, setIron_oreIsOpen] = useState(true);
  const [stone, setStoneIsOpen] = useState(true);

  function ResourceHandler() {
      setBankIsOpen(true);
    if (bank) DeleteHandler();
  }

  function DeleteHandler() {
    setBankIsOpen(false);
  }

  return (
    <div className="row mx-5 my-5">
      <Menu ResourceHandler={ResourceHandler}/>
      <div className="col position-relative">
        <Map/>
        <LoopResourceMarks bank={bank} gold_bar={gold_bar} gold_ore={gold_ore} iron_ore={iron_ore} stone={stone}/>
      </div>
    </div>
  );
}

export default App;
