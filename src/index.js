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
            fontSize: '2rem',
            [theme1.breakpoints.up('sm')]: {
              fontSize: '2.4rem',
            },
            [theme1.breakpoints.up('md')]: {
              fontSize: '2.5rem',
            },
        },
        
        h2:{
            fontSize: '1.8rem',
            [theme1.breakpoints.up('md')]: {
            fontSize: '2rem',
            },
            [theme1.breakpoints.up('md')]: {
            fontSize: '2rem',
            },
        },
        
        h3:{
            fontSize: '1.5rem',
            [theme1.breakpoints.up('md')]: {
            fontSize: '1.8rem',
            },
            [theme1.breakpoints.up('md')]: {
            fontSize: '1.8rem',
            },
            fontWeight:100,
        },
    }
})

ReactDOM.render( <MuiThemeProvider theme={theme} > <App /> </MuiThemeProvider>, document.getElementById('root'));

serviceWorker.unregister();
