import React from "react";


// All pages that rely on 3rd party components (other than Material-UI) are
// loaded asynchronously, to keep the initial JS bundle to a minimum size

// Layouts
import Landingpage from "./landingpage";

const routes = [
  {
    path: "/",
    element: <Landingpage />,
  },
];

export default routes;
