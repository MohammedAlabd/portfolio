import React from 'react'
import { Grid, Card, CardActions,  CardActionArea, CardMedia, Typography, CardContent, Button } from '@material-ui/core';


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
                        style={{height: 140}}
                        image="../../imgs/bg.jpg"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Share
                        </Button>
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item style={{alignSelf:'flex-end'}}>
                <Card style={{margin:50}} >
                        <CardActionArea style={{maxWidth: 345}}>
                            <CardMedia
                            style={{height: 140}}
                            image="../../imgs/bg.jpg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Share
                            </Button>
                            <Button size="small" color="primary">
                            Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            <Grid item xs={12}>
                <Card style={{margin:50}} >
                    <CardActionArea style={{maxWidth: 345}}>
                        <CardMedia
                        style={{height: 140}}
                        image="../../imgs/bg.jpg"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Share
                        </Button>
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>           
        </Grid>
    )
}
