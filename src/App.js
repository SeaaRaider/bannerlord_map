import Map from "./components/Map";
import LoopCastles from "./components/LoopCastles";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div className="row mx-5 my-5">
      <Menu/>
      <div className="col position-relative">
        <Map />
        <LoopCastles />
      </div>
    </div>
  );
}

export default App;
