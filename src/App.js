import React from "react";
import "./App.css";
import Landing from "./component/Landing/Landing";
import Projects from "./component/Projects/Projects";
import NavBar from "./component/NavBar/NavBar";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import { Grid, CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 0,
      name: "",
      email: "",
      subject: "",
      message: "",
      nameValidate: true,
      emailValidate: true,
      subjectValidate: true,
      messageValidate: true,
      formSubmitted: false,
      formEmailSent: false,
      modalMessage: "",
      modalTitle: "",
      modalState:false
    };
  }

  componentDidMount() {
    if (window.location.pathname === "/home/about")
      this.setState({ selectedTab: 0 });
    else if (window.location.pathname === "/home/Projects")
      this.setState({ selectedTab: 1 });
    else if (window.location.pathname === "/home/contact")
      this.setState({ selectedTab: 2 });
  }

  handleClose = () => {
    this.setState({modalState:false})
  };

  handleChange = index => {
    this.setState({
      selectedTab: index
    });
  };

  handleInputChange = (value, name) => {
    let validation = !!value;
    this.setState({
      [name]: value,
      [name + "Validate"]: validation
    });
  };

  openStateModal = (modalTitle, modalMessage) => {
    console.log('fromopen');
    
    this.setState({
      modalMessage,
      modalTitle,
      modalState: true
    })

  }

  checkValidation = () => {
    const { name, email, subject, message} = this.state
    if (!name) {
      this.openStateModal('Input Mistake', 'Please enter your name')
      this.setState({nameValidate:false})
      return false
    } else if (!email) {
      this.openStateModal('Input Mistake', 'please enter your email')
      this.setState({emailValidate:false})
      return false
    } else if (!subject) {
      this.openStateModal('Input Mistake', 'please enter the subject')
      this.setState({subjectValidate:false})
      return false
    }else if (!message) {
      this.openStateModal('Input Mistake', 'please enter your message')
      this.setState({messageValidate:false})
      return false
    }
    return true

  }

  handleSubmit = event => {
    event.preventDefault();
    if(this.checkValidation()) {
      
      // const templateId = "template_0oB538o9";
  
      //   const templateParams = {
      //     "name": this.state.name,
      //     "subject": this.state.subject,
      //     "senderEmail": this.state.email,
      //     "message": this.state.message
      //  }
  
      //  window.emailjs.send(
      //   'default_service', // default email provider in your EmailJS account
      //   templateId,
      //   templateParams,
      //  ).then(res => {
      //    this.openStateModal('sent success', 'thank you for your message')
      //   this.setState({ formEmailSent: true })
      // })
      // // Handle errors here however you like, or use a React error boundary
      // .catch(err => this.openStateModal('Failed to send your email. Error: ', err))
  
      this.setState({
        formSubmitted: true
      });
    }
  };

  render() {
    const {
      name,
      email,
      subject,
      message,
      formEmailSent,
      formSubmitted,
      nameValidate,
      emailValidate,
      subjectValidate,
      messageValidate,
      modalMessage,
      modalTitle,
      modalState,
    } = this.state;

    return (
      <Router>
        <Grid style={{ height: "100vh" }} container>
          <CssBaseline />
          <Route exact path="/">
            <Landing />
          </Route>
          <Grid item xs md={2}>
            <Route path="/home">
              <NavBar
                handleChange={this.handleChange}
                selectedTab={this.state.selectedTab}
              />
            </Route>
          </Grid>
          <Grid item xs={12} md={10}>
            <Route exact path="/home/about">
              <About />
            </Route>
            <Route exact path="/home/Projects">
              <Projects />
            </Route>
            <Route exact path="/home/contact">
              <Contact
                name={name}
                email={email}
                subject={subject}
                message={message}
                nameValidate={nameValidate}
                emailValidate={emailValidate}
                subjectValidate={subjectValidate}
                messageValidate={messageValidate}
                formEmailSent={formEmailSent}
                formSubmitted={formSubmitted}
                modalMessage={modalMessage}
                modalTitle={modalTitle}
                modalState={modalState}
                handleClose={this.handleClose}
                handleInputChange={this.handleInputChange}
                handleSubmit={this.handleSubmit}
              />
            </Route>
          </Grid>
        </Grid>
      </Router>
    );
  }
}

export default App;
