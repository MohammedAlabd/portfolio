import React from "react";
import { Container, Grid, Typography, IconButton, makeStyles } from "@material-ui/core";
import { GitHub, LinkedIn, Facebook, Instagram } from "@material-ui/icons";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const useStyles = makeStyles(theme => ({
    firstTypography: {
      alignSelf: "center",
      margin: "70px 0 0 0",
      [theme.breakpoints.up("md")]: {
        margin: "30px 0 0 0"
      }
    },
    container: {
        height: "100%",
        overflow: "hidden" 
    },
    height:{
        height:'100%'
    }
  
  }));

export default props => {
    
  const classes = useStyles();
    
  return (
    <>
      <Container className={classes.container} fixed>
        <Grid
          className={classes.height}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <div data-aos="fade-right" data-aos-duration="1500">
              <Typography className={classes.firstTypography} variant="h5">Welcome to my site, I am ...</Typography>
              <Typography color="primary" variant="h2">
                Mohammed Abdulbary
              </Typography>
              <Typography variant="h5">
                  a Junior Front-End Developer
              </Typography>
            </div>
            <Grid container data-aos='zoom-in'  data-aos-delay='1600'   spacing={1} >
                <Grid item xs={2}>
                    <a href='https://github.com/MohammedAlabd'>
                        <IconButton variant="outlined" color="primary" component="span">
                            <GitHub fontSize='large'  />
                        </IconButton>
                    </a>
                </Grid>
                <Grid item xs={2}>
                    <a href='https://www.linkedin.com/in/mohammed-alabd/'>
                        <IconButton onClick={ () => window.location = 'https://www.linkedin.com/in/mohammed-alabd/'} variant="outlined" color="primary" component="span">
                            <LinkedIn fontSize='large'  />
                        </IconButton>
                    </a>
                </Grid>
                <Grid item xs={2}>
                    <a href='https://www.facebook.com/assassin.first1'>
                        <IconButton onClick={ () => window.location = 'https://www.facebook.com/assassin.first1'} variant="outlined" color="primary" component="span">
                            <Facebook fontSize='large'  />
                        </IconButton>
                    </a>
                </Grid>
                <Grid item xs={2}>
                    <a href='https://www.instagram.com/m.u.h96/'>
                        <IconButton onClick={ () => window.location = 'https://www.instagram.com/m.u.h96/'} variant="outlined"   color="primary" aria-label="upload picture" component="span">
                            <Instagram fontSize='large'  />
                        </IconButton>
                    </a>
                </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              data-aos="fade-left"
              data-aos-delay="800"
              data-aos-duration="800"
            >
              I was learning C and C++ language at first but then started to
              learn about front-End and after that i joined Re:coded Front-End
              Bootcamp with the hope to be a junior Developer When I was kid, My
              dream was to learn how to type fast and I was really curios about
              how the apps runs in my compute... Unfortunately My road was far
              away from the codding and I joined a Environmental engineering
              college and I passed the first tow years there, after that I
              realized that I don't want to be there, thats not me. so I started
              to learn codding by my own using youtube and I learnt C & C++
              languages and after that I met with an Iraqi software engineer
              working at facebook and his brother and they led me to inter the
              Front-End web development and then I joined Re:Coded Front-End
              Bootcamp
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
