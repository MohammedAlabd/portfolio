import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
export default props => {
    return (
        <>
            <Container fixed >
                <Grid   alignItems="stretch" container >
                    <Grid
                        item
                        justify="flex-start"
                        alignItems="center"
                        xs='6'
                    >
                        <div style={{margin:'220px 0px'}}>
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

