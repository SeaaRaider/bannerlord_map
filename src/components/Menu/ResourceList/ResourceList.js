import classes from "./ResourceList.module.css";
import { RESOURCES_DATA } from "../../../resourceData";

function ResourceList({ visibility, setVisibility }) {
  var actives = [];

  Object.values(visibility).map((val, i) => {
    actives[i] = val;
  });

  const resourceHandler = (i) => {
    if (i == "0") {
      setVisibility({
        ...visibility,
        bank: true,
      });
      if (visibility.bank) {
        setVisibility({
          ...visibility,
          bank: false,
        });
      }
    }

    if (i == "1") {
      setVisibility({
        ...visibility,
        goldExport: true,
      });
      if (visibility.goldExport) {
        setVisibility({
          ...visibility,
          goldExport: false,
        });
      }
    }

    if (i == "2") {
      setVisibility({
        ...visibility,
        goldOre: true,
      });
      if (visibility.goldOre) {
        setVisibility({
          ...visibility,
          goldOre: false,
        });
      }
    }

    if (i == "3") {
      setVisibility({
        ...visibility,
        ironOre: true,
      });
      if (visibility.ironOre) {
        setVisibility({
          ...visibility,
          ironOre: false,
        });
      }
    }

    if (i == "4") {
      setVisibility({
        ...visibility,
        stone: true,
      });
      if (visibility.stone) {
        setVisibility({
          ...visibility,
          stone: false,
        });
      }
    }
  };

  return (
    <ul className={classes.list}>
      {RESOURCES_DATA.map((res, i) => (
        <li
          key={res.id}
          className={
            classes.bar + " " + (actives[i] ? classes.active : classes.inactive)
          }
          onClick={() => resourceHandler(i)}
        >
          <img className={classes.icon} src={res.image} />
          {res.name}
        </li>
      ))}
    </ul>
  );
}

export default ResourceList;
