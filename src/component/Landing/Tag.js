import React from "react";
import { Typography, Button } from "@material-ui/core";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, SplitLetters, SplitWords } from "react-gsap";
import {Link} from "react-router-dom"
import styled from "styled-components";

const SplitTextStyled = styled.div`
  overflow: hidden;
  text-align: center;

  .section {
    height: 100vh;
  }
  .textContainer {
    position: relative;
    display: inline-block;
    transform-origin: center;
  }
  .text,
  .text2 {
    position: relative;
    // font-size: 80px;
    font-weight: bold;
    display: inline-block;
    // font-size: 72px;
  }
`;

export default ({tag:{name,direction}, lastTag}) => {
  
  return (
    <>
      <SplitTextStyled>
        <Controller>
          <Scene
            pin={true}
            reverse={true}
            duration={600}
          >
            <Tween
              staggerFrom={{
                [direction]: -2000,
                rotation: -720,
                opacity: 0,
                color: "#ff0000",
                ease: "Expo.easeOut"
              }}
              stagger={0.15}
              onCompleteAll={() => {
                console.log("on complete all");
              }}
            >
                {lastTag 
                ? 
                <SplitWords >
                      <Link to={`/home/about`} style={{textDecoration:'none'}}>
                        <Button  style={{padding:'20px 40px',borderRadius:10}} variant="outlined" size="large" color="primary" >
                          <Typography variant='h5'className="text">
                            {name}
                          </Typography>
                        </Button>
                      </Link>
              </SplitWords> 
                : <SplitLetters>
                <Typography variant='h2'  className="text">
                  {name}
                </Typography>
                </SplitLetters>
                }
            </Tween>
          </Scene>
        </Controller>
      </SplitTextStyled>
    </>
  );
};
