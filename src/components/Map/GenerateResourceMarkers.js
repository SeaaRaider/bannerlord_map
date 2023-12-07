import classes from "./GenerateResourceMarkers.modules.css";

export default function GenerateResourceMarkers(props) {
  var resources = [];

  const render = (data) => {
    const listItems = [];
    for (let i = 0; i < data.number; i++) {
      listItems.push(
        <img className={data.id + i + " icon"} key={i} src={data.image} alt="Error"/>
      );
    }
    return listItems;
  };

  {
    Object.values(props.visibility).map((val, i) => {
      resources[i] = val;
    });
  }

  return props.resData.map((e, i) => (resources[i] ? render(e) : ""));
}