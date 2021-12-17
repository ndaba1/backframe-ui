import React, { useState } from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import { Avatar, Menu, MenuItem } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import MenuIcon from "@material-ui/icons/Menu";

import logo from "../assets/backframe_logo_name.png";
import { theme } from "../theme";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "55px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px",
    boxShadow: "0px 0.5px 6px 2px rgba(0,0,0, 0.3)",
    position: "sticky",
    top: 0,
    zIndex: "999",
    backgroundColor: "#fff",
  },
  image: {
    height: "96%",
    cursor: "pointer",
    marginLeft: "5px",
  },
  links: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.between("xs", "sm")]: {
      display: "none",
    },
  },
  icons: {
    fontSize: "28px",
    marginLeft: "20px",
    cursor: "pointer",
    color: "#0E1131",
  },
  menuButton: {
    marginLeft: "auto",
    fontSize: "30px",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
});

export default function Navbar() {
  const [anchorEl, setAnchor] = useState(null);

  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={logo} alt="backframe_logo" className={classes.image} />
      <div className={classes.links}>
        <SettingsIcon className={classes.icons} />
        <ExitToAppIcon className={classes.icons} />
        <Avatar alt="avatar_image" className={classes.icons} />
      </div>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        onClick={handleClick}
      >
        <MenuIcon aria-controls="simple-menu" aria-haspopup="true" />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <PersonIcon style={{ marginRight: "7px" }} /> Accounts
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose} style={{ alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <SettingsIcon style={{ marginRight: "7px" }} /> Settings
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose} style={{ alignItems: "center" }}>
          {" "}
          <div style={{ display: "flex", alignItems: "center" }}>
            <ExitToAppIcon style={{ marginRight: "7px" }} /> Log Out
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
