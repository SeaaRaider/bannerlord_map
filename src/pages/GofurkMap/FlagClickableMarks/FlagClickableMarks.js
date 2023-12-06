import { useState } from "react";

import classes from "./FlagClickableMarks.module.css";
import Popup from "./Popup/Popup";

function Flag(props) {
  const [popupIsOpen, setPopupIsOpen] = useState(false);

  function PopupHandler() {
    setPopupIsOpen(true);
    if (popupIsOpen) DeleteHandler();
  }

  function DeleteHandler() {
    setPopupIsOpen(false);
  }

  return (
    <div>
      <div
        className={classes[props.location] + " " + classes.flag}
        onClick={PopupHandler}
      ></div>
      <div>{popupIsOpen && <Popup location={props.location} />}</div>
    </div>
  );
}
export default Flag;
