import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { Search } from "../Components/Search";
import { TopBar } from "../Components/TopBar";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: { paddingLeft: "10%", paddingRight: "10%" }
}));

export const HomeLayout = () => {
  const classes = useStyles();
  return (
    <>
      <TopBar />
      <div className={classes.root}>
        <Search />
      </div>
    </>
  );
};
