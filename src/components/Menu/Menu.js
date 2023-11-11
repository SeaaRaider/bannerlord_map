import ResourceList from "../ResourceList/ResourceList";

import { RESOURCES_DATA } from "../../resourceData";

function Menu() {
  return (
    <div className="col col-lg-2 text-bg-secondary p-3 position-relative">
        <ResourceList resources={RESOURCES_DATA}/>
    </div>
  );
}

export default Menu;
