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
                <Grid item xs={12} md={6}>
                    <div>
                        <Typography variant='h5'>Hello, Welcome to my site, I am ...</Typography >
                        <Typography color='primary' variant='h3'>Mohammed Abdulbary</Typography>
                        <Typography variant='h5'>a Junior Front-End Developer</Typography>
                    </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography>
                            I was learning C and C++ language at first but then started to learn about front-End and after that i joined Re:coded Front-End Bootcamp with the hope to be a junior Developer 
                            When I was kid, My dream was to learn how to type fast and
                            I was really curios about how the apps runs in my compute...
                            Unfortunately My road was far away from the codding and I joined a Environmental engineering college and I passed the first tow years there,
                            after that I realized that I don't want to be there, thats not me.
                            so I started to learn codding by my own using youtube and I learnt C & C++ languages and after that I met with an Iraqi software engineer working at facebook and his brother and  they led me to inter the Front-End web development and then I joined Re:Coded Front-End Bootcamp 
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

