import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "600vh",
    justifyContent: "center",
    padding: "300px",
    // alignContent: "center",
  },
});

export default function Container(props) {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.root} container>
        <Grid item>{props.children}</Grid>
      </Grid>
    </>
  );
}
