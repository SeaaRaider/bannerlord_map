import LoopCastleFlagMarks from "./LoopCastleFlagMarks";
import LoopResourceMarks from "./LoopResourceMarks"

function Map({visibility}) {
  return (
    <div>
      <LoopCastleFlagMarks/>
      <LoopResourceMarks  visibility={visibility}/>
      <img src="images/PE_map.jpg" className="mw-100" />
    </div>
  );
}

export default Map;
