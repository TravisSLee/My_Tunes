import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getSongs } from './actions';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import About from './components/About';
import Songs from './containers/Songs'
import Form from './components/Form';

class App extends Component {
  
  componentDidMount(){
    this.props.getSongs();
  }
  render(){
    if (this.props.loading) {
      return (
        <h3> One Moment Please..... </h3>
      )
    }
    return (
      <Router> 
          <Nav />
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/about" component={ About } />
            <Route exact path="/songs" component={ Songs } />
            <Route exact path="/songs/new" component={ Form } />
            <Route component={ ErrorPage } /> 
          </Switch>
          <Footer />
      </Router>
       );
  }
  
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps, { getSongs })(App);
