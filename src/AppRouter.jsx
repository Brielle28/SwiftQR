import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QR from "./Page/QR";
import Layout from "./Layout/Layout";
import History from "./Page/History";
import QRDetail from "./Page/QRDetail";

const routing = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <QR/>
      },
      {
        path: "/history",
        element: <History/>
      },
      {
        path:"/history/:id",
         element:<QRDetail />
      }

    ]
  },
]);
const AppRouter = () => {
  return <>
  <RouterProvider router={routing}/>
  </>;
};

export default AppRouter;
