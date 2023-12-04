import classes from "./Menu.module.css";
import ResourceList from "./ResourceList/ResourceList";

function Menu({ visibility, setVisibility }) {
  return (
    <div className={"col col-lg-2 " + classes.menu}>
      <ResourceList visibility={visibility} setVisibility={setVisibility} />
    </div>
  );
}

export default Menu;
