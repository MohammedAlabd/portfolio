import React from "react";
import { Typography } from "@material-ui/core";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline, SplitLetters, SplitWords } from "react-gsap";
import styled from "styled-components";
import {Link} from "react-router-dom"

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
    font-size: 80px;
    font-weight: bold;
    display: inline-block;
    font-size: 72px;
    // background: rgb(220,231,117);
    // background: linear-gradient(180deg, rgba(220,231,117,1) 0%, rgba(0,77,64,1) 83%);
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
  }
`;

export default ({tag:{name,direction}, lastTag}) => {
  
  return (
    <div style={{}}>
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
                    <Typography  onClick={() => window.location = '/about'} color='primary' className="text">
                      {name}
                    </Typography>
              </SplitWords>                   
                : <SplitLetters>
                <Typography color='primary' className="text">
                  {name}
                </Typography>
                </SplitLetters>
                }
            </Tween>
          </Scene>
        </Controller>
      </SplitTextStyled>
    </div>
  );
};
