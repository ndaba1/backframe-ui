import { makeStyles } from "@material-ui/styles";
import React from "react";

import SideBar from "./Sidebar";
// import { theme } from "../theme";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    // overflowX: "hidden",
    // paddingTop: "55px",
  },
  main: {
    flex: 1,
  },
  content: {
    marginLeft: "auto",
    flexBasis: "80%",
    padding: "25px",
  },
  sidebar: {
    margin: 0,
  },
});

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SideBar />
      <div className={classes.content}>{children}</div>
    </div>
  );
}
