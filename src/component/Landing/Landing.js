import React from 'react'
import styled from 'styled-components';
import Tag from '../Landing/Tag'
import Tags from '../../data/Tags'
import {Link} from "react-router-dom"
import { Typography } from "@material-ui/core";


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
    
    return (
        <SplitTextStyled>
            <div className="section" >
                <Typography>
                    Welcome To My World ....
                    Scroll down please
                </Typography>
            </div>
                {Tags.map( tag => (<Tag key={tag} tag={tag} />))}    
            {/* <Link to={`/About`} style={{color:'#fff',textDecoration:'none'}}> */}
                <Tag  lastTag={true} tag={{name:'Click here to go to About Page', direction:"bottom"}} />
            {/* </Link> */}
            <div className="lastSection" />
        </SplitTextStyled>

    )
}
