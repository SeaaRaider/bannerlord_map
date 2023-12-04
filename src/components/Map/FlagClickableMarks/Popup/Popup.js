import classes from "./Popup.module.css";

function Popup(props) {
  return <div className={classes[props.location] + " " + classes.popup}></div>;
}

export default Popup;
