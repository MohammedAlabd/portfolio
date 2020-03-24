import React from 'react'
import styled from 'styled-components';
import Tag from '../Landing/Tag'
import Tags from '../../data/Tags'
import { Typography, Grid, Box } from "@material-ui/core";
import img from "../../img/bg8.jpg"
import { shadows } from '@material-ui/system';


const SplitTextStyled = styled.div`
overflow: hidden;
text-align: center;

.section {
  height: 100vh;
}
.lastSection {
    height:200px;
}
`;




export default props => {
    console.log("shadows",shadows);
    
    return (
        <div style={{background:'#d9d8d5'}}>
            <SplitTextStyled>
                <Grid 
                    container 
                    justify="center"
                    alignItems="center"
                    className="section"
                    style={{
                        backgroundImage :`url('${img}')`,
                        backgroundSize:'cover',
                        backgroundPosition:'top',
                    }}          
                >
                    <Grid item xs={12}>
                    <Typography fontWeight={500}  variant='h1' style={{textShadow: '-4px 12px 8px #4a4a4a33',marginTop:220 }}>
                        Welcome To My World
                       </Typography>
                    </Grid>

                    <Grid item xs={12}>
                       <Typography  variant='h2' style={{textShadow: '-4px 12px 8px #4a4a4a33'}}>
                         I'm Mohammed AlAbd  
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography  variant='h3' style={{textShadow: '-4px 12px 8px #4a4a4a33'}}>
                         Please scroll down...
                        </Typography>
                    </Grid>

                </Grid>
                    {Tags.map( tag => (<Tag key={tag} tag={tag} />))}    
                    <Tag  lastTag={true} tag={{name:'Click here to go to About Page', direction:"bottom"}} />
                <div className="lastSection" />
            </SplitTextStyled>
        </div>

    )
}
