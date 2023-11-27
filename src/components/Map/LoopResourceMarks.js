import { RESOURCES_DATA } from "../../resourceData";

import classes from './LoopResourceMarks.modules.css'

function LoopResources(props) {
  
  const render = (data) => {
    const listItems = [];
    for (let i = 0; i < data.number; i++) {

        listItems.push(<img className={data.id + i + " icon"} id="icon" key={i} src={data.image}/>);
    }
    return listItems;
  };
  return (
    <div>
      {RESOURCES_DATA.map((e) => (
        <div>{props.visibility[e.id] && render(e)}</div>
      ))}
    </div>
    
  );

}

export default LoopResources;
