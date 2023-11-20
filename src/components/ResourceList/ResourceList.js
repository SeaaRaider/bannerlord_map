import classes from './ResourceList.module.css'

import Resource from "./Resource";

function ResourceList({ResourceHandler, resources}) {

  return (
    <ul className={classes.list}>
      {resources.map((resource) => (
        <Resource
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
