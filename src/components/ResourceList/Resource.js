import classes from './Resource.module.css'

function Resource({ResourceHandler, image, name, id}) {
  return (
    <li className={classes.bar}>
      <button onClick={ResourceHandler}><img className={classes.icon} src={image}/>{name}</button>
    </li>
  );
}

export default Resource;
