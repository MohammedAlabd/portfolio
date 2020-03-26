import React from 'react'
import styled from 'styled-components';
import Tag from './Tag'
import Tags from '../../data/Tags'
import { Typography, Grid, IconButton } from "@material-ui/core";
import img from "../../img/bg.jpg"
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    section: {
        height:'100vh'
    },
    lastSection:{
        height:'200px'
    },
    textFamily:{
        fontFamily: '"Montserrat", sans-serif',
        // margin:15,
    },
    marginGrid:{
        marginLeft:30
    },
    lastText:{
        marginLeft:30,
        marginTop:200,
        [theme.breakpoints.up('sm')]:{
            marginTop:150
        }
    },
    arrowDown:{
        position:'absolute',
        right:'10px',
        bottom:'30px',
    },

}));

const SplitTextStyled = styled.div`
overflow: hidden;
// text-align: center;

.section {
  height: 100vh;
}
.lastSection {
    height:200px;
}
.textFamily{
    font-family: 'Montserrat', sans-serif;
    margin-left:15;
}
.marginGrid{
    margin:10px
}
`;




export default props => {
    
  const classes = useStyles();

    return (
        <div style={{background:'#f2f2f2', width:'100%'}}>
            <SplitTextStyled>
                <Grid 
                    container 
                    spacing={3}
                    direction='column'
                    justify="flex-start"
                    alignItems="space-around"
                    className={classes.section}
                    style={{
                        backgroundImage :`url('${img}')`,
                        backgroundSize:'cover',
                        backgroundPosition:'top',
                    }}          
                >
                    <Grid item style={{marginTop:60}} className={classes.marginGrid} >
                    <Typography className={classes.textFamily} fontWeight={500}  variant='h1' style={{textShadow: '-4px 12px 8px #4a4a4a33', fontSize:30 }}>
                        Hi
                       </Typography>
                    </Grid>

                    <Grid item className={classes.marginGrid} >
                       <Typography className={classes.textFamily} variant='h2' style={{textShadow: '-4px 12px 8px #4a4a4a33', fontSize:30}}>
                         I'm Mohammed AlAbd  
                        </Typography>
                    </Grid>

                    <Grid item className={classes.lastText} >
                        <Typography className={classes.textFamily} variant='h3' style={{textShadow: '-4px 12px 8px #4a4a4a33', fontSize:30}}>
                         Please scroll down...
                        </Typography>
                    </Grid>
                    <Grid item className={classes.arrowDown}>
                        <a href='#last' style={{textDecoration:'none'}}>
                            <IconButton size="large" variant="outlined" style={{backgroundColor:"#00695c"}}  color="secondary" aria-label="upload picture" component="span">
                                <ArrowDownwardIcon fontSize='large'  />
                            </IconButton>
                        </a>
                    </Grid>

                </Grid>
                    {Tags.map( tag => (<Tag key={tag} tag={tag} />))}    
                    <Tag  lastTag={true} tag={{name:'Click here to go to About Page', direction:"bottom"}} />
                <div className="lastSection" />
            </SplitTextStyled>
        </div>

    )
}
