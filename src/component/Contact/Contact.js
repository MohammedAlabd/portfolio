import React from "react";
import {
  List,
  ListItem,
  Button,
  TextField,
  ListItemIcon,
  ListItemText,
  Container,
  Grid,
  Typography
} from "@material-ui/core";
import { GitHub, LinkedIn, Facebook, Instagram } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

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

}));

export default props => {
  const classes = useStyles();

  return (
    <Container >
      <Grid container spacing={2}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12}>
            <Typography
              className={classes.firstTypography}
              align="center"
              variant="h2"
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
              <Grid item xs={12}>
                <Typography className={classes.responsiveTextAlign} variant="subtitle1">
                  You can reach me on:
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  fullWidth
                  variant="outlined"
                  color="primary"
                  size="large"
                  className={classes.button}
                  startIcon={<GitHub color="primary" />}
                >
                  GitHub
                </Button>
              </Grid>
              <Grid item>
                <Button
                  fullWidth
                  variant="outlined"
                  color="primary"
                  size="large"
                  className={classes.button}
                  startIcon={<LinkedIn color="primary" />}
                >
                  Linked In
                </Button>
              </Grid>
              <Grid item>
                <Button
                  fullWidth
                  variant="outlined"
                  color="primary"
                  size="large"
                  className={classes.button}
                  startIcon={<Facebook color="primary" />}
                >
                  Facebook
                </Button>
              </Grid>
              <Grid item>
                <Button
                  fullWidth
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
            <Grid item xs={12}>
                <Typography
                    align="center"
                    variant="subtitle1"
                >
                    You can Send me Message:
                </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
              />
            </Grid>
            <Grid container item justify="center" alignItems="center">
              <TextField
                fullWidth
                label="Subject"
                variant="outlined"
              />
            </Grid>
            <Grid container item justify="center" alignItems="center">
              <TextField
                multiline
                fullWidth
                rows="10"
                placeholder="Message"
                variant="outlined"
              />
            </Grid>
            <Grid container item justify="center" alignItems="center">
              <Button
                size="large"
                variant="contained"
                color="primary"
              >
                <Typography color="initial"> Send </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
