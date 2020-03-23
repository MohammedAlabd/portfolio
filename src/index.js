import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core'
import {teal, lime} from '@material-ui/core/colors'
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
    }
})

console.log(theme);


ReactDOM.render( <MuiThemeProvider theme={theme} > <App /> </MuiThemeProvider>, document.getElementById('root'));

serviceWorker.unregister();
