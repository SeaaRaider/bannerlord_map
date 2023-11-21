import { RESOURCES_DATA } from "../../resourceData";

import ResourceMarks from "./ResourceMarks/ResourceMarks";

function LoopResources(props) {
  return (
    <div>
      {RESOURCES_DATA.map((resource) => (
        <ResourceMarks
          key={resource.id}
          id={resource.id}
          image={resource.image}
          name={resource.name}
          number={resource.number}
          bank={props.bank}
          gold_bar={props.gold_bar}
          gold_ore={props.gold_ore}
          iron_ore={props.iron_ore}
          stone={props.stone}
        />
      ))}
    </div>
  );
}

export default LoopResources;
