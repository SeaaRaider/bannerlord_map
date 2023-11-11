import { useState } from "react";

import Popup from "./Popup";

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
      <div className={props.location + " flag"} onClick={PopupHandler}></div>
      <div>{popupIsOpen && <Popup location={props.location + " popup"} />}</div>
    </div>
  );
}
export default Flag;
