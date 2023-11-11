import { RESOURCES_DATA } from "../resourceData";

import ResourceMarks from "./ResourceMarks/RespourceMarks";

function LoopResources() {
  return (
    <div>
      {RESOURCES_DATA.map((resource) => (
        <ResourceMarks
          key={resource.id}
          id={resource.id}
          image={resource.image}
          name={resource.name}
          number={resource.number}
        />
      ))}
    </div>
  );
}

export default LoopResources;
