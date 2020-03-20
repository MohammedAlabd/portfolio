import React from 'react'
import {List, ListItem, Button, TextField, ListItemIcon, ListItemText, Container, Grid, Typography } from "@material-ui/core"
import {GitHub, LinkedIn, Facebook, Instagram} from '@material-ui/icons';


export default props => {
    
    return (
        <Container fixed >
            <Grid container>
                <Grid container item xs={12} justify="center" alignItems="center">
                    <Grid item >
                        <Typography style={{margin:30}} align="center" variant="h2">
                            Contact Me
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container  alignItems="center" item xs={6}  >
                    <Grid item xs={5}> 
                    <Typography  variant="subtitle1">You can reach me on:</Typography>
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItem button>
                            <ListItemIcon>
                                <GitHub color='primary' />
                            </ListItemIcon>
                            <Typography align="center">
                                <ListItemText primary="GitHub" />
                            </Typography>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <LinkedIn color='primary' />
                            </ListItemIcon>
                            <ListItemText primary="LinkedIn" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <Facebook color='primary' />
                            </ListItemIcon>
                            <ListItemText primary="Facebook" />
                        </ListItem>    
                        <ListItem  button>
                            <ListItemIcon>
                                <Instagram color='primary' />
                            </ListItemIcon>
                            <ListItemText primary="Instagram" />
                        </ListItem>
                    </List>
                    </Grid>
                </Grid>
                <Grid container item spacing={2} justify="space-between" alignItems="center" xs={6}>
                    <Grid item xs={6}>
                        <TextField fullWidth style={{marginBottom:10}} label="Name" variant="outlined" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth style={{marginBottom:10}} label="Email" variant="outlined" />
                    </Grid>
                    <Grid container item justify="center" alignItems="center">
                        <TextField fullWidth style={{marginBottom:10}} label="Subject" variant="outlined" />
                    </Grid>
                    <Grid container item justify="center" alignItems="center">
                        <TextField multiline fullWidth style={{marginBottom:20}} rows='10' placeholder      ="Message" variant="outlined" />
                    </Grid>
                    <Grid container item justify="center" alignItems="center">
                        <Button size='large' variant="contained" color="primary" style={{marginBottom:20}} >
                            <Typography color='initial' > Primary </Typography> 
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            
            
        </Container>
    )
}
