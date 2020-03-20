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
                    <div style={{margin:''}}>
                        <h3>Hi All I am ...</h3>
                        <h1>Mohammed Abdulbary</h1>
                        <h3>I am a Junior Front-End Developer</h3>
                    </div>
                    </Grid>
                    <Grid item xs="6">
                        <Typography>
                            {/* I was learning C and C++ language at first but then started to learn about front-End and after that i joined Re:coded Front-End Bootcamp with the hope to be a junior Developer  */}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

