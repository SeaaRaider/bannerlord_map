import Map from "./components/Map";
import LoopCastles from "./components/LoopCastles";
import Menu from "./components/Menu/Menu";
import LoopResources from "./components/LoopResources";

function App() {
  return (
    <div className="row mx-5 my-5">
      <Menu/>
      <div className="col position-relative">
        <Map />
        <LoopResources/>
        <LoopCastles />
      </div>
    </div>
  );
}

export default App;
