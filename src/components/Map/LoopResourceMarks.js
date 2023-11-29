import { RESOURCES_DATA } from "../../resourceData";

import classes from "./LoopResourceMarks.modules.css";

function LoopResources(props) {
  var resources = [];

  const render = (data) => {
    const listItems = [];
    for (let i = 0; i < data.number; i++) {
      listItems.push(
        <img
          className={data.id + i + " icon"}
          id="icon"
          key={i}
          src={data.image}
        />
      );
    }
    return listItems;
  };

  {
    Object.values(props.visibility).map((val, i) => {
      resources[i] = val;
    });
  }

  return RESOURCES_DATA.map((e, i) => (resources[i] ? render(e) : ""));
}

export default LoopResources;
