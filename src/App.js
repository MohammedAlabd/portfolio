import React from 'react';
import './App.css';
import Projects from './component/Projects/Projects'
import Header from "./component/Header/Header"
import About from "./component/About/About"
import Contact from './component/Contact/Contact';
import { Grid, CssBaseline } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component{

  constructor(props) {
    super(props)
  
    this.state = {
       selectedTab:0
    }
  }
  
  handleChange = index => {
    this.setState({
      selectedTab:index
    })
  }
  
  render(){
    return (
      <Router>
        <Grid style={{height:'100vh'}} container>
          <CssBaseline/>
          <Grid
          container 
          direction="column"
          justify="space-between"
          alignItems="stretch"
          item xs={2}>
            <Route path="/">
              <Header handleChange={this.handleChange} selectedTab={this.state.selectedTab} />
            </Route>  
          </Grid>
          <Grid item xs={10}>
            <Route exact path='/'>
              <About/>
            </Route>
            <Route exact path='/Projects'>
              <Projects/>
            </Route>
            <Route exact path='/contact'>
              <Contact/>
            </Route>
          </Grid>
        </Grid>
      </Router>
    );
  }
}

export default App;
