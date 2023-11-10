import Flag from "./components/Flag";
import Map from "./components/Map";
import LoopCastles from "./components/LoopCastles";

function App() {
  return (
    <div className="row mx-5 my-5">
      <div className="col col-lg-2 text-bg-secondary p-3 position-relative">
        This will be legend and clickable options for map overlay
      </div>
      <div className="col position-relative">
        <Map />
        <LoopCastles />
      </div>
    </div>
  );
}

export default App;
