import React from "react";
import Tag from "./Tag";
import Tags from "../../data/Tags";
import { Typography, Grid, IconButton } from "@material-ui/core";
import img from "../../img/bg.jpg";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  section: {
    height: "100vh"
  },
  container: {
    background: "#f2f2f2",
    width: "100%",
    overflow: "hidden"
  },
  lastSection: {
    height: "200px"
  },
  textFamily: {
    fontFamily: '"Montserrat", sans-serif'
    // margin:15,
  },
  marginGrid: {
    marginLeft: 30
  },
  marginFirstGrid: {
    margin:'60px 0px 0px 30px'
  },
  lastText: {
    marginLeft: 30,
    marginTop: 350,
    [theme.breakpoints.up("sm")]: {
      marginTop: 150
    }
  },
  arrowDown: {
    position: "absolute",
    right: "10px",
    bottom: "30px"
  }
}));

export default props => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid
        container
        spacing={3}
        direction="column"
        justify="flex-start"
        // alignItems="space-around"
        className={classes.section}
        style={{
          backgroundImage: `url('${img}')`,
          backgroundSize: "cover",
          backgroundPosition: "top"
        }}
      >
        <Grid item  className={classes.marginFirstGrid}>
          <Typography
            className={classes.textFamily}
            fontWeight={500}
            variant="h1"
            style={{ textShadow: "-4px 12px 8px #4a4a4a33", fontSize: 30 }}
          >
            Hi
          </Typography>
        </Grid>

        <Grid item className={classes.marginGrid}>
          <Typography
            className={classes.textFamily}
            variant="h2"
            style={{ textShadow: "-4px 12px 8px #4a4a4a33", fontSize: 30 }}
          >
            I'm Mohammed AlAbd
          </Typography>
        </Grid>

        <Grid item className={classes.lastText}>
          <Typography
            className={classes.textFamily}
            variant="h3"
            style={{ textShadow: "-4px 12px 8px #4a4a4a33", fontSize: 30 }}
          >
            Please scroll down...
          </Typography>
        </Grid>
        <Grid item className={classes.arrowDown}>
          <a href="#last" style={{ textDecoration: "none" }}>
            <IconButton
              variant="outlined"
              className={classes.icon}
              color="secondary"
              aria-label="upload picture"
              component="span"
            >
              <ArrowDownwardIcon fontSize="large" />
            </IconButton>
          </a>
        </Grid>
      </Grid>
      {Tags.map( ( tag, index ) => (
        <Tag key={index} tag={tag} />
      ))}
      <Tag
        lastTag={true}
        tag={{ name: "Click here to go to About Page", direction: "bottom" }}
      />
      <div className="lastSection" />
    </div>
  );
};
