import React from "react";
import {
  Grid,
  Card,
  CardActions,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  Button
} from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';

import gsuImg from '../../img/afis-1.png'
import portfolio from '../../img/Mohammed-Abdul-Barry.png'
import mentorsImg from '../../img/mentorship.png'
import minesImg from '../../img/mines-weeper.png'

import AOS from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles(theme => ({
    firstTypography:{
        alignSelf: "center",
        margin: "70px 0 0 0",
        [theme.breakpoints.up("md")]:{
            margin: "30px 0 0 0"
        }
    },
    card:{
        margin: '10px 20px', 
        maxWidth: 600
    },
    minesWeeperImg:{
        backgroundImage: `url('${minesImg}')`,
        height: 200,
        backgroundPosition: "top",
    },
    gsuImg:{
        backgroundImage: `url('${gsuImg}')`,
        height: 200,
        backgroundPosition: "top",
    },
    mentorsImg:{
        backgroundImage: `url('${mentorsImg}')`,
        height: 200,
        backgroundPosition: "top",
    },
    portfolio:{
      backgroundImage: `url('${portfolio}')`,
      height: 200,
      backgroundPosition: "right",
  },
    cardActionArea:{
        maxWidth: 600
    },
    alignSelfEnd:{
        alignSelf: "flex-end"
    },
    buttonText:{
        textAlign:'center',
        display:"content",
        padding:0,
        margin:0,
    },
    flexDirectionResponsive:{
        [theme.breakpoints.down('xs')]:{
            flexDirection:'column-reverse'
        }
    },

}))

AOS.init();

export default function Projects() {

    const classes = useStyles();
    
  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="flex-start"
    >
      <Typography
        className={classes.firstTypography}
        variant="h2"
        align="center"
      >
        My Works
      </Typography>
      <Grid item>
        <Card
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-anchor-placement="top-bottom"
          className={classes.card}
        >
          <Grid container>
            <Grid item xs={12} sm={6}>
              <CardActionArea disabled className={classes.cardActionArea}>
                <CardMedia
                  height="140"
                  className={classes.minesWeeperImg}
                  title="Mines Weeper"
                  imag={minesImg}
                />
              </CardActionArea>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  My MinesWeeper
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  It s My version of the famous Game of MinesSweeper, I mad eit
                  using pure javascript with some CSS styling
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="outlined"
                  href="https://github.com/MohammedAlabd/MinesWeeper"
                  color="primary"
                >
                  <p className={classes.buttonText} > GitHub Page </p>
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  href="https://minesweeper-purejs.netlify.com/"
                  color="primary"
                >
                  <p className={classes.buttonText} > Visit Link </p>
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item className={classes.alignSelfEnd}>
        <Card
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-anchor-placement="top-bottom"
          className={classes.card}
        >
          <Grid container className={classes.flexDirectionResponsive}>
            <Grid item xs={12} sm={6}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Mentors and Mentees
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Small website that allows you to find a Mentor/Mentee with the
                  time that suits you and connect with them really easy
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small" variant="outlined"
                  href="https://github.com/osamaakb/mentorship"
                  color="primary"
                >
                  <p className={classes.buttonText} > GitHub Page </p>
                </Button>
                <Button
                  size="small" variant="outlined"
                  href="https://osamaakb.github.io/mentorship/"
                  color="primary"
                >
                  <p className={classes.buttonText} > Visit Link </p>
                  
                </Button>
              </CardActions>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CardActionArea disabled className={classes.cardActionArea}>
                <CardMedia
                  height="140"
                  className={classes.mentorsImg}
                  title="Mentors Webpage"
                />
              </CardActionArea>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item>
        <Card
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-anchor-placement="top-bottom"
          className={classes.card}        >
          <Grid container>
            <Grid item xs={12} sm={6}>
              <CardActionArea disabled className={classes.cardActionArea}>
                <CardMedia
                  height="140"
                  className={classes.gsuImg}
                  title="GSU WebPage"
                />
              </CardActionArea>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  GSU Webpage
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Small Project made with bootstrap with my team of classMates
                  from re:coded BootCamp
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small" variant="outlined"
                  href="https://github.com/MohammedAlabd/gsu-sfk"
                  color="primary"
                >
                  <p className={classes.buttonText} > GitHub Page </p>
                </Button>
                <Button size="small" href='https://mohammedalabd.github.io/gsu-sfk/' variant="outlined" color="primary">
                <p className={classes.buttonText} > Visit Link </p>
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item className={classes.alignSelfEnd}>
        <Card
          data-aos="fade-right"
          data-aos-duration="800"          
          data-aos-anchor-placement="top-bottom"
          className={classes.card}
        >
          <Grid container className={classes.flexDirectionResponsive}>
            <Grid item xs={12} sm={6}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Online Portfolio
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A web site to share my works with other made with React.js and Material-UI
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small" variant="outlined"
                  href='https://github.com/MohammedAlabd/portfolio'
                  color="primary"
                >
                  <p className={classes.buttonText} > GitHub Page </p>
                </Button>
                <Button
                  size="small" variant="outlined"
                  href="/portfolio"
                  color="primary"
                >
                  <p className={classes.buttonText} > Visit Link </p>
                  
                </Button>
              </CardActions>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CardActionArea disabled className={classes.cardActionArea}>
                <CardMedia
                  height="140"
                  className={classes.portfolio}
                  title="Mentors Webpage"
                />
              </CardActionArea>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
