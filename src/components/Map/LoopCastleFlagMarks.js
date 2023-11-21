import FlagClickableMarks from "./FlagClickableMarks/FlagClickableMarks";

function LoopCastles() {
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
    <div>
      {castles.map((castle) => (
        <FlagClickableMarks location={castle} />
      ))}
    </div>
  );
}

export default LoopCastles;
