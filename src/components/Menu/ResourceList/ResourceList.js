import classes from './ResourceList.module.css'

import ResourceIcon from "./ResourceIcon/ResourceIcon";

function ResourceList({ResourceHandler, resources}) {

  return (
    <ul className={classes.list}>
      {resources.map((resource) => (
        <ResourceIcon
          key={resource.id}
          id={resource.id}
          image={resource.image}
          name={resource.name}
          ResourceHandler={ResourceHandler}
        />
      ))}
    </ul>
  );
}

export default ResourceList;
