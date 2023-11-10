import Flag from "./components/Flag";
import Map from "./components/Map";
import Ornaments from "./components/Ornaments";

function App() {
  let castles = [
    "umma",
    "mardin",
    "bargusia",
    "umme_rock",
    "los_gemelos",
    "lagash",
    "enki",
    "alejandria",
    "utu",
    "town_watch",
    "ilerda",
    "abela",
    "kish",
    "abismo_helmm",
    "vacceos",
    "outlaw_camp",
    "bastetania",
    "andosia",
  ];
  return (
    <div className="row mx-5 my-5">
      <Ornaments location={"position-absolute top-0 start-0"} position={"topleft"}/>
      <Ornaments location={"position-absolute top-0 end-0" }position={"topright"}/>
      <Ornaments location={"position-absolute bottom-0 start-0"} position={"bottomleft"}/>
      <Ornaments location={"position-absolute bottom-0 end-0"} position={"bottomright"}/>
      <div className="col col-lg-2 text-bg-secondary p-3 position-relative">
        This will be legend and clickable options for map overlay
      </div>
      <div className="col position-relative">
        <div>
          <Map />
          {castles.map((castle) => (
            <Flag location={castle} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
