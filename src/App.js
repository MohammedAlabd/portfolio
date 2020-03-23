import React from 'react';
import './App.css';
import Landing from './component/Landing/Landing'
import Projects from './component/Projects/Projects'
import NavBar from "./component/NavBar/NavBar"
import About from "./component/About/About"
import Contact from './component/Contact/Contact';
import { Grid, CssBaseline } from '@material-ui/core';
import {
  BrowserRouter as Router,
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
              <NavBar handleChange={this.handleChange} selectedTab={this.state.selectedTab} />
            </Route>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Route exact path="/">
              <Landing/>
            </Route>  
            <Route exact path='/about'>
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
