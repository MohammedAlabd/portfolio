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
            <Route exact path="/">
              <Landing/>
            </Route>
            
          {/* <Grid
          container 
          direction="column"
          justify="space-between"
          alignItems="stretch"
          // item xs={0} md={2} 
          > */}
            <Grid item xs={0} md={2}>
              <Route path="/home">
                <NavBar handleChange={this.handleChange} selectedTab={this.state.selectedTab} />
              </Route>
            </Grid>
              <Grid item xs={12} md={10} >
              <Route exact path='/home/about'>
                <About/>
              </Route>
              <Route exact path='/home/Projects'>
                <Projects/>
              </Route>
              <Route exact path='/home/contact'>
                <Contact/>
              </Route>
            </Grid>
          {/* </Grid> */}
        </Grid>
      </Router>
    );
  }
}

export default App;
