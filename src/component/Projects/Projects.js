import React from 'react'
import { Grid, Card, CardActions,  CardActionArea, CardMedia, Typography, CardContent, Button } from '@material-ui/core';
import './style.css'

export default function Projects() {
    return (
        <Grid 
        container 
        direction="column"
        justify="space-around"
        alignItems="flex-start" >
                <Typography style={{alignSelf:'center',margin:"40px 0"}} variant='h2' align='center' > My Works </Typography>
            <Grid item>
                <Card style={{margin:50}} >
                    <CardActionArea style={{maxWidth: 345}}>
                        <CardMedia
                        height="140"
                        className="mines-weeper-img"
                        style={{
                            height: 200,
                            backgroundPosition:'top',

                        }}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            My MinesWeeper
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        It s My version of the famous Game of MinesSweeper, I mad eit using pure javascript with some CSS styling 
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" href='https://github.com/MohammedAlabd/MinesWeeper' color="primary">
                        GitHub Page
                        </Button>
                        <Button size="small" href='https://minesweeper-purejs.netlify.com/' color="primary">
                        Visit Link
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item style={{alignSelf:'flex-end'}}>
                <Card style={{margin:50}} >
                        <CardActionArea style={{maxWidth: 345}}>
                            <CardMedia
                            style={{
                                height: 200,
                                backgroundPosition:'top',
                            }}
                            className="mentors-img"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Mentors and Mentees
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Small website that allows you to find a Mentor/Mentee with the time that suits you and connect with them really easy
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" href='https://github.com/osamaakb/mentorship' color="primary">
                            GitHub Page
                            </Button>
                            <Button size="small" href='https://osamaakb.github.io/mentorship/' color="primary">
                            Visit Link
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            <Grid item xs={12}>
                <Card style={{margin:50}} >
                    <CardActionArea style={{maxWidth: 345}}>
                        <CardMedia
                        style={{
                            height: 200,
                            backgroundPosition:'top',
                        }}
                        className="gsu-img"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            BootStrap Project
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Small Project made with bootstrap with my team of classMates from re:coded BootCamp
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" href='https://github.com/MohammedAlabd/gsu-sfk' color="primary">
                        GitHub Page
                        </Button>
                        <Button size="small" color="primary">
                        Visit Link
                        </Button>
                    </CardActions>
                </Card>
            </Grid>           
        </Grid>
    )
}
