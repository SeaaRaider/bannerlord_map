import classes from "./ResourceList.module.css";

function ResourceList({ ResourceHandler, resources }) {
  return (
    <ul className={classes.list}>
      {resources.map((resource) => (
        <li key={resource.id} id={resource.id} className={classes.bar + " " + classes.active}>
          <button onClick={()=>ResourceHandler(resource )} className={classes.bar}><img className={classes.icon} src={resource.image}/>{resource.name}</button>
        </li>
      ))}
    </ul>
  );
}

export default ResourceList;
