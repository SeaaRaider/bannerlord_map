import GetFlagClickableAreas from "../../components/Map/FlagClickableMarks/GetFlagClickableAreas";
import GenerateResourceMarkers from "../../components/Map/GenerateResourceMarkers"

import { RESOURCES_DATA } from "./resourceData"

function GofurkMap({visibility}) {

  return (
    <div>
      <GetFlagClickableAreas />
      <GenerateResourceMarkers visibility={visibility} resData={RESOURCES_DATA}/>
      <img src="images/Gofurk.jpg" className="mw-100" alt="Error"/>
    </div>
  );
}

export default GofurkMap;
