import React from 'react';
import './App.css';
import Header from "./component/Header/Header"
import About from "./component/About/About"
import Contact from './component/Contact/Contact';
import { Container } from '@material-ui/core';
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
      <div>
            <Header handleChange={this.handleChange} selectedTab={this.state.selectedTab} />
          <Container>
            <About/>
            {/* <Contact/> */}
          </Container>
      </div>
    );
  }
}

export default App;
