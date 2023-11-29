import classes from "./Menu.module.css"

import ResourceList from "./ResourceList/ResourceList";

import { RESOURCES_DATA } from "../../resourceData";

function Menu({resourceHandler}) {
  return (
    <div className={"col col-lg-2 " + classes.menu}>
        <ResourceList resourceHandler={resourceHandler} resources={RESOURCES_DATA}/>
    </div>
  );
}

export default Menu;
