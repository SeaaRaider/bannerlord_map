import classes from './ResourceMarks.modules.css'

function ResourceMarks(props){

    const render = () => {
        const listItems = [];
        for (let i = 0; i < props.number; i++) {
          listItems.push(<img className={props.name + i + " icon"} key={i} src={props.image}/>);
        }
        return listItems;
      };
      return <div>{render()}</div>;

    // return(
    //     <img src={props.image}/>
    // )
}

export default ResourceMarks