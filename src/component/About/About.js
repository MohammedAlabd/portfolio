import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
export default props => {
    return (
        <>
            <Container style={{height:'100%'}} fixed >
                <Grid
                style={{height:'100%'}}                 
                container
                direction="row"
                justify="center"
                alignItems="center" >
                <Grid item xs='6'>
                    <div>
                        <Typography variant='h5'>Hello, Welcome to my site, I am ...</Typography >
                        <Typography variant='h3'>Mohammed Abdulbary</Typography>
                        <Typography variant='h5'>I am a Junior Front-End Developer</Typography>
                    </div>
                    </Grid>
                    <Grid item xs="6">
                        <Typography>
                            I was learning C and C++ language at first but then started to learn about front-End and after that i joined Re:coded Front-End Bootcamp with the hope to be a junior Developer 
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

