import Flag from "./components/Flag";
import Map from "./components/Map";

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
      <div className="col col-lg-2 text-bg-secondary p-3 position-relative">
        This will be legend and clickable options for map overlay
      </div>
      <div className="col position-relative">
          <Map />
          {castles.map((castle) => (
            <Flag location={castle} />
          ))}
      </div>
    </div>
  );
}

export default App;
