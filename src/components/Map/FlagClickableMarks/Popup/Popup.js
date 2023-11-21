import classes from './Popup.module.css'

function Popup(props) {
  return <div className={classes[props.location] + " " + classes.popup}>This will be popup</div>;
}

export default Popup;
