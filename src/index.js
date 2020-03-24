import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core'
import {teal, lime} from '@material-ui/core/colors'
const theme1 = createMuiTheme()
const theme = createMuiTheme({
    palette:{
        primary:{
            main:teal[800],
            light:teal[200],
            dark:teal[600]
        },
        secondary:
        {
            main:lime[300],
            light:lime[100],
            dark:lime[600]
        },
    },
    typography:{
        h1:{
            fontSize: '3.6rem',
            [theme1.breakpoints.up('sm')]: {
              fontSize: '5rem',
            },
            [theme1.breakpoints.up('md')]: {
              fontSize: '6rem',
            },
        },
        
        h2:{
            fontSize: '3rem',
            [theme1.breakpoints.up('md')]: {
            fontSize: '4rem',
            },
            [theme1.breakpoints.up('md')]: {
            fontSize: '5rem',
            },
        },
        
        h3:{
            fontSize: '2rem',
            [theme1.breakpoints.up('md')]: {
            fontSize: '2.4rem',
            },
            [theme1.breakpoints.up('md')]: {
            fontSize: '3rem',
            },
            fontWeight:100,
        },
    }
})

// theme.typography.h3 = {
//     fontSize: '2rem',
//     [theme.breakpoints.up('md')]: {
//       fontSize: '2.4rem',
//     },
//     [theme.breakpoints.up('md')]: {
//       fontSize: '3rem',
//     },
//   };

//   theme.typography.h1 = {
//     fontSize: '4rem',
//     [theme.breakpoints.up('sm')]: {
//       fontSize: '5rem',
//     },
//     [theme.breakpoints.up('md')]: {
//       fontSize: '6rem',
//     },
//   };
  

console.log(theme);


ReactDOM.render( <MuiThemeProvider theme={theme} > <App /> </MuiThemeProvider>, document.getElementById('root'));

serviceWorker.unregister();
