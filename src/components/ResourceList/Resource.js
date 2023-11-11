import classes from './Resource.module.css'

function Resource(props) {
  return (
    <li className={classes.bar}>
      <img className={classes.icon} src={props.image}/>{props.name}
    </li>
  );
}

export default Resource;
