import classes from "./Menu.module.css"

import ResourceList from "./ResourceList/ResourceList";

import { RESOURCES_DATA } from "../../resourceData";

function Menu({ResourceHandler}) {
  return (
    <div className={"col col-lg-2 " + classes.menu}>
        <ResourceList ResourceHandler={ResourceHandler} resources={RESOURCES_DATA}/>
    </div>
  );
}

export default Menu;
