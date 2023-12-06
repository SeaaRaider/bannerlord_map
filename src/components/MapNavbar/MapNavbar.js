import classes from "./MapNavbar.module.css";

function MapNavbar() {
  return (
    <div className={classes.menuBar}>
        <a href="/Gofurk" className={classes.button}>GOFURK</a>
        <a href="/SomeMap" className={classes.button}>MAP</a>
    </div>
  );
}

export default MapNavbar;
