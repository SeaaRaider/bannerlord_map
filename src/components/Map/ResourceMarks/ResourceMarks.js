import classes from './ResourceMarks.modules.css'

function ResourceMarks(props){

    const render = () => {
        const listItems = [];
        for (let i = 0; i < props.number; i++) {
          if(props.id === "bank")
          {
            listItems.push(<div>{props.bank && <img className={props.id + i + " icon"} id="icon" key={i} src={props.image}/>}</div>);
          }
          else if(props.id === "gold_bar")
          {
            listItems.push(<div>{props.gold_bar && <img className={props.id + i + " icon"} id="icon" key={i} src={props.image}/>}</div>);
          }
          else if(props.id === "gold_ore")
          {
            listItems.push(<div>{props.gold_ore && <img className={props.id + i + " icon"} id="icon" key={i} src={props.image}/>}</div>);
          }
          else if(props.id === "iron_ore")
          {
            listItems.push(<div>{props.iron_ore && <img className={props.id + i + " icon"} id="icon" key={i} src={props.image}/>}</div>);
          }
          else if(props.id === "stone")
          {
            listItems.push(<div>{props.stone && <img className={props.id + i + " icon"} id="icon" key={i} src={props.image}/>}</div>);
          }
        }
        return listItems;
      };
      return <div>{render()}</div>;
}

export default ResourceMarks