import React from "react";
import Tag from "./Tag";
import Tags from "../../data/Tags";
import { Typography, Grid, IconButton } from "@material-ui/core";
import img from "../../img/bg.jpg";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  section: {
    height: "100vh",
    maxWidth:'100%',
    backgroundImage: `url('${img}')`,
    backgroundSize: "cover",
    backgroundPosition: "top"
  },
  container: {
    background: "#f2f2f2",
    width: "100%",
  },
  lastSection: {
    height: "200px"
  },
  textFamily: {
    textShadow: "-4px 12px 8px #4a4a4a33",
    fontSize: 30,
    fontFamily: '"Montserrat", sans-serif'
  },
  marginGrid: {
    marginLeft: 30
  },
  marginFirstGrid: {
    margin:'60px 0px 0px 30px'
  },
  lastText: {
    marginLeft: 30,
    marginTop: 380,
    [theme.breakpoints.up("sm")]: {
      marginTop: 150
    }
  },
  arrowDown: {
    zIndex:2000,
    position: "absolute",
    right: "20px",
    bottom: "30px",
  },
  icon:{
    backgroundColor:'#00695c',
    color: '#ffe766' ,
    '&:hover':{
        color:'#00695c'
    }
  },
  decoration:{
    textDecoration: "none"
  },
  marginTop:{
    marginTop:40
  }
}));

export default props => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
        <a href="#last" className={classes.arrowDown}>
            <IconButton
              variant="outlined"
              className={`${classes.icon} ${classes.arrowDown}`}
              color="secondary"
              aria-label="upload picture"
              component="span"
            >
              <ArrowDownwardIcon fontSize="large" />
            </IconButton>
          </a>
      <Grid
        container
        direction="column"
        justify="flex-start"
        className={classes.section}
        
      >
        <Grid item  className={classes.marginFirstGrid}>
          <Typography
            className={classes.textFamily}
            fontWeight={500}
            variant="h1"
          >
            Hi
          </Typography>
        </Grid>

        <Grid item className={classes.marginGrid}>
          <Typography
            className={`${classes.textFamily} ${classes.marginTop}`}
            variant="h2"
          >
            I'm Mohammed AlAbd
          </Typography>
        </Grid>

        <Grid item className={classes.lastText}>
          <Typography
            className={classes.textFamily}
            variant="h3"
          >
            Please scroll down...
          </Typography>
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
