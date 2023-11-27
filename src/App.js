import { useState } from "react";

import Map from "./components/Map/Map";
import Menu from "./components/Menu/Menu";
import LoopResourceMarks from "./components/Map/LoopResourceMarks";

function App() {
  const [visibility, setVisibility] = useState([]);

  function ResourceHandler(resource) {
    let loading = visibility.slice();
    if (visibility) {
      loading[resource.id] = true;
    } 
    setVisibility(loading);
  }

  return (
    <div className="row mx-5 my-5">
      <Menu ResourceHandler={ResourceHandler} />
      <div className="col position-relative">
        <Map />
        <LoopResourceMarks
          visibility={visibility}
        />
      </div>
    </div>
  );
}

export default App;
