import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import VascongadasMap from "./pages/VscongadasMap/Map";
import GofurkMap from "./pages/GofurkMap/Map";
import Layout from "./components/Layout";
import PathConstants from "./routes/pathConstants";

function App() {
  const [visibility, setVisibility] = useState({
    bank: false,
    goldExport: false,
    goldOre: false,
    ironOre: false,
    stone: false,
  });

  const router = createBrowserRouter([
    {
      element: <Layout visibility={visibility} setVisibility={setVisibility}/>,

      errorElement: <GofurkMap visibility={visibility} />, //replace with error page next time

      children: [
        {
          path: PathConstants.GOFURK,
          element: <GofurkMap visibility={visibility} />,
        },
        {
          path: PathConstants.VASCONGADAS,
          element: <VascongadasMap visibility={visibility} />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
