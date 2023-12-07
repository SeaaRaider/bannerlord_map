import GetFlagClickableAreas from "../../components/Map/FlagClickableMarks/GetFlagClickableAreas";
import GenerateResourceMarkers from "../../components/Map/GenerateResourceMarkers"
import classes from "./GenerateResourceMarkers.modules.css";

import { RESOURCES_DATA } from "./resourceData"

function Map({visibility}) {
  return (
    <div>
      <GetFlagClickableAreas/>
      <GenerateResourceMarkers  visibility={visibility} resData={RESOURCES_DATA}/>
      <img src="images/PE_map.jpg" className="mw-100" alt="Error"/>
    </div>
  );
}

export default Map;
