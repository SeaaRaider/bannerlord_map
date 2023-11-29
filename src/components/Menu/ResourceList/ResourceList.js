import classes from "./ResourceList.module.css";

function ResourceList({ resourceHandler, resources }) {
  return (
    <ul className={classes.list}>
      {resources.map((res, i) => (
        <li
          key={res.id}
          id={res.id}
          className={classes.bar + " " + classes.active}
          onClick={() => resourceHandler(i)}
        >
          <img className={classes.icon} src={res.image} />
          {res.name}
        </li>
      ))}
    </ul>
  );
}

export default ResourceList;
