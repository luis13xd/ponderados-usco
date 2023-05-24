/* eslint-disable arrow-body-style */
import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../hocs/navbar/Navbar";
import "./layout.scss";

export const Layout = () => {
  return (
    <div className="root">
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

