import classes from "./ResourceList.module.css";

function ResourceList({ ResourceHandler, resources }) {
  return (
    <ul className={classes.list}>
      {resources.map((resource) => (
        <li key={resource.id} className={classes.bar}>
          <button onClick={()=>ResourceHandler(resource)}><img className={classes.icon} src={resource.image}/>{resource.name}</button>
        </li>
      ))}
    </ul>
  );
}

export default ResourceList;
