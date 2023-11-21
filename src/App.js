import { useState } from "react";

import { RESOURCES_DATA } from "./resourceData";

import Map from "./components/Map/Map";
import Menu from "./components/Menu/Menu";
import LoopResourceMarks from "./components/Map/LoopResourceMarks";

function App() {
  const [bank, setBankIsOpen] = useState([]);

  function ResourceHandler(resource) {
    let loading = bank.slice();
    if (bank) {
      loading[resource.id] = true;
    } 
    // else {
    //   loading[resource.id] = false;
    // }
    setBankIsOpen(loading);
  }

  return (
    <div className="row mx-5 my-5">
      <Menu ResourceHandler={ResourceHandler} />
      <div className="col position-relative">
        <Map />
        <LoopResourceMarks
          bank={bank}
        />
      </div>
    </div>
  );
}

export default App;
