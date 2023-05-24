/* eslint-disable arrow-body-style */
import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from "static/usco.png";
import "./navbar.scss";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <AppBar
      position="static"
      style={{ padding: "0.5rem", marginBottom: "2rem" }}
    >
      <Toolbar>
        <img
          src={Logo}
          alt="Logo"
          className="navbarimgDesktop"
          onClick={() => navigate("/")}
        />
      </Toolbar>
    </AppBar>
  );
};
