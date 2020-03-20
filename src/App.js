import React from 'react';
import './App.css';
import Header from "./component/Header/Header"
import About from "./component/About/About"
import Contact from './component/Contact/Contact';
import { Container, Grid, CssBaseline } from '@material-ui/core';
class App extends React.Component{

  constructor(props) {
    super(props)
  
    this.state = {
       selectedTab:0
    }
  }
  
  handleChange = index => {
    console.log(index);
    this.setState({
      selectedTab:index
    })
  }
  
  render(){
    return (
      <Grid style={{height:'100vh'}} container>
        <CssBaseline/>
        <Grid
        container 
        direction="column"
        justify="space-between"
        alignItems="stretch"
         item xs={2}>
            <Header handleChange={this.handleChange} selectedTab={this.state.selectedTab} />
        </Grid>
        <Grid item xs={10}>
            <About/>
        </Grid>
          {/* <Container> */}
            {/* <Contact/> */}
          {/* </Container> */}
      </Grid>
    );
  }
}

export default App;
