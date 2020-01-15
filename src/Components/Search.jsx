import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";

import axios from "axios";
axios.defaults.baseURL = "https://localhost:3001/";

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200
    },
    searchContainer: {
      display: "flex",
      alignItems: "center"
    }
  })
);

export const Search = () => {
  const classes = useStyles();
  const [searchForm, setSearchForm] = React.useState({
    search: "",
    topics: ""
  });

  const handleChange = event => {
    // setSearchForm((searchForm[event.target.name] = event.target.value));

    console.log(searchForm);
    axios
      .get(`/search`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log("err");
      });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <div className={classes.searchContainer}>
        <TextField
          id="standard-basic"
          name="search"
          className={classes.textField}
          label={"Search SCMP"}
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          id="standard-basic"
          name="topics"
          className={classes.textField}
          label={"Topics"}
          margin="normal"
          onChange={handleChange}
        />
        <SearchIcon />
      </div>
    </form>
  );
};
