import classes from './ResourceList.module.css'

import Resource from "./Resource";

function ResourceList(props) {
  return (
    <ul className={classes.list}>
      {props.resources.map((resource) => (
        <Resource
          key={resource.id}
          id={resource.id}
          image={resource.image}
          name={resource.name}
        />
      ))}
    </ul>
  );
}

export default ResourceList;
