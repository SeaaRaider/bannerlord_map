import GenerateFlagClickableArea from "./FlagClickableMarks/GenerateFlagClickableArea";
import GenerateResourceMarkers from "./GenerateResourceMarkers"

function Map({visibility}) {
  return (
    <div>
      <GenerateFlagClickableArea/>
      <GenerateResourceMarkers  visibility={visibility}/>
      <img src="images/PE_map.jpg" className="mw-100" alt="Error"/>
    </div>
  );
}

export default Map;
