import React from "react";
import {
  Button,
  TextField,
  Container,
  Grid,
  Typography
} from "@material-ui/core";
import { GitHub, LinkedIn, Facebook, Instagram } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import StateModal from '../StateModal/StateModal'

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
  button: {
    justifyContent: "end",
    width: 200,
    [theme.breakpoints.down("xs")]: {
      width: 150
    }
  },
  justifyContentResponsive: {
    justifyContent: "end",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-around"
    }
  },
  responsiveTextAlign:{
      [theme.breakpoints.down('sm')]:{
          textAlign:'center'
      }
  },
  topMargin:{
    marginTop:16
  },
}));

export default ({ 
    name, 
    email,
    subject,
    message,
    handleInputChange,
    handleSubmit,
    nameValidate,
    emailValidate,
    subjectValidate,
    messageValidate,
    modalMessage,
    modalTitle,
    modalState,
    handleModalClose,
    formSubmitted
}) => {
  const classes = useStyles();

  const handleChangeEvent = event => handleInputChange(event.target.value, event.target.name)
  
  return (
    <form  onSubmit={handleSubmit}  >
    <Container >
      <Grid container spacing={2}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12}>
            <StateModal modalMessage={modalMessage} modalTitle={modalTitle} handleModalClose={handleModalClose} modalState={modalState} />
            <Typography
              className={classes.firstTypography}
              align="center"
              variant="h2"
              data-aos='fade-down'
              data-aos-duration='1000'
            >
              Contact Me
            </Typography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" item xs={12} sm={6}>
          <Grid item xs={12} sm={6}>
            <Grid
              container
              className={classes.justifyContentResponsive}
              justify="center"
              spacing={2}
            >
              <Grid item xs={12} data-aos='fade-right' data-aos-duration='1000' >
                <Typography className={classes.responsiveTextAlign} variant="subtitle1">
                  You can reach me on:
                </Typography>
              </Grid>
              <Grid item data-aos='fade-right' data-aos-delay='1000' data-aos-duration='1000' >
                <Button
                  href='https://github.com/MohammedAlabd'
                  variant="outlined"
                  color="primary"
                  size="large"
                  className={classes.button}
                  startIcon={<GitHub color="primary" />}
                >
                  GitHub
                </Button>
              </Grid>
              <Grid item data-aos='fade-right' data-aos-delay='1500' data-aos-duration='1000'>
                <Button
                  href='https://www.linkedin.com/in/mohammed-alabd/'
                  variant="outlined"
                  color="primary"
                  size="large"
                  className={classes.button}
                  startIcon={<LinkedIn color="primary" />}
                >
                  Linked In
                </Button>
              </Grid>
              <Grid item data-aos='fade-right' data-aos-delay='2000' data-aos-duration='1000' >
                <Button
                  href='https://www.facebook.com/assassin.first1'
                  variant="outlined"
                  color="primary"
                  size="large"
                  className={classes.button}
                  startIcon={<Facebook color="primary" />}
                >
                  Facebook
                </Button>
              </Grid>
              <Grid item data-aos='fade-right' data-aos-delay='2500' data-aos-duration='1000'>
                <Button
                  href='https://www.instagram.com/m.u.h96/'
                  variant="outlined"
                  color="primary"
                  size="large"
                  className={classes.button}
                  startIcon={<Instagram color="primary" />}
                >
                  Instagram
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid
            container
            spacing={2}
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={12} >
                <Typography data-aos='fade-left'
                    data-aos-duration='1000'
                    align="center"
                    variant="subtitle1"
                >
                    You can Send me Message:
                </Typography>
            </Grid>
              <Grid item xs={12} md={6} data-aos='fade-left' data-aos-delay='1000' data-aos-duration='1000'>
                <TextField
                  fullWidth
                  error={!nameValidate}
                  required
                  name='name'
                  label="Name"
                  variant="outlined"
                  onChange={handleChangeEvent}
                  value={name}
                />
              </Grid>
              <Grid item xs={12} md={6} data-aos='fade-left' data-aos-delay='1000' data-aos-duration='1000'>
                <TextField
                  fullWidth
                  error={!emailValidate}
                  required
                  type='email'
                  name='email'
                  label="Email"
                  variant="outlined"
                  onChange={handleChangeEvent}
                  value={email}
                />
              </Grid>
              <Grid container item justify="center" alignItems="center" data-aos='fade-left' data-aos-delay='1000' data-aos-duration='1000'>
                <TextField
                  fullWidth
                  error={!subjectValidate}
                  required
                  name='subject'
                  label="Subject"
                  variant="outlined"
                  onChange={handleChangeEvent}
                  value={subject}
                />
              </Grid>
              <Grid container item justify="center" alignItems="center" data-aos='fade-left' data-aos-delay='1000' data-aos-duration='1000'>
                <TextField
                  multiline
                  fullWidth
                  error={!messageValidate}
                  required
                  name='message'
                  rows="10"
                  placeholder="Message"
                  variant="outlined"
                  onChange={handleChangeEvent}
                  value={message}
                />
                <Button
                  onClick={handleSubmit}
                  type='submit'
                  size="large"
                  variant="contained"
                  color="primary"
                  className={classes.topMargin}
                >
                  <Typography color="initial"> {formSubmitted ? "Sending..." : "Send" } </Typography>
                </Button>
              </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
    </form>

  );
};
