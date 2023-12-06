import LoopCastleFlagMarks from "./LoopCastleFlagMarks";
import LoopResourceMarks from "./LoopResourceMarks"

function GofurkMap({visibility}) {
  return (
    <div>
      <LoopCastleFlagMarks />
      <LoopResourceMarks visibility={visibility}/>
      <img src="images/Gofurk.jpg" className="mw-100" />
    </div>
  );
}

export default GofurkMap;
