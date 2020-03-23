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
import "./style.css";
import AOS from 'aos';
import  'aos/dist/aos.css';
import { Controller, Scene } from 'react-scrollmagic';

AOS.init();

export default function Projects() {
    
  return (
      <Controller>
        <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="flex-start"
        >
        <Typography
            style={{ alignSelf: "center", margin: "30px 0" }}
            variant="h2"
            align="center"
        >
            {" "}
            My Works{" "}
        </Typography>
        <Grid item>
            <Card data-aos="fade-right" data-aos-duration="800" style={{ margin: 50, maxWidth: 600 }}>
            <Grid container>
                <Grid item xs={6}>
                <CardActionArea disabled style={{ maxWidth: 600 }}>
                    <CardMedia
                    height="140"
                    className="mines-weeper-img"
                    style={{
                        height: 200,
                        backgroundPosition: "top"
                    }}
                    title="Mines Weeper"
                    />
                </CardActionArea>
                </Grid>
                <Grid item xs={6}>
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
                    href="https://github.com/MohammedAlabd/MinesWeeper"
                    color="primary"
                    >
                    GitHub Page
                    </Button>
                    <Button
                    size="small"
                    href="https://minesweeper-purejs.netlify.com/"
                    color="primary"
                    >
                    Visit Link
                    </Button>
                </CardActions>
                </Grid>
            </Grid>
            </Card>
        </Grid>
        <Grid item style={{ alignSelf: "flex-end" }}>
            <Card data-aos="fade-left" data-aos-duration="800" style={{ margin: 50, maxWidth: 600 }}>
            <Grid container>
                <Grid item xs={6}>
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
                    size="small"
                    href="https://github.com/osamaakb/mentorship"
                    color="primary"
                    >
                    GitHub Page
                    </Button>
                    <Button
                    size="small"
                    href="https://osamaakb.github.io/mentorship/"
                    color="primary"
                    >
                    Visit Link
                    </Button>
                </CardActions>
                </Grid>
                <Grid item xs={6}>
                <CardActionArea disabled style={{ maxWidth: 600 }}>
                    <CardMedia
                    height="140"
                    className="mentors-img"
                    style={{
                        height: 200,
                        backgroundPosition: "top"
                    }}
                    title="Mentors Webpage"
                    />
                </CardActionArea>
                </Grid>
            </Grid>
            </Card>
        </Grid>
        <Grid item>
            <Scene duration={600} pin>
                <Card data-aos="fade-right" data-aos-duration="800" style={{ margin: 50, width: 600 }}>
                <Grid container>
                    <Grid item xs={6}>
                    <CardActionArea disabled style={{ maxWidth: 600 }}>
                        <CardMedia
                        height="140"
                        className="gsu-img"
                        style={{
                            height: 200,
                            backgroundPosition: "top"
                        }}
                        title="GSU WebPage"
                        />
                    </CardActionArea>
                    </Grid>
                    <Grid item xs={6}>
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
                        size="small"
                        href="https://github.com/MohammedAlabd/gsu-sfk"
                        color="primary"
                        >
                        GitHub Page
                        </Button>
                        <Button size="small" color="primary">
                        Visit Link
                        </Button>
                    </CardActions>
                    </Grid>
                </Grid>
                </Card>
            </Scene>
        </Grid>
        </Grid>

      </Controller>
  );
}
