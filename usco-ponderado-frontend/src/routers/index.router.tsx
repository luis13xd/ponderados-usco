import React from "react";
import {
  createBrowserRouter
} from "react-router-dom";
import { TableView } from "views/tableView/TableView";
import { Layout } from "../components/layouts/Layout";



export const RouterConfig = createBrowserRouter([
  { 
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <TableView />,
      }
    ],
  }
]);
