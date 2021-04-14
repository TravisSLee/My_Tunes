import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getSongs, getArtists } from './actions';
import NavBar from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import About from './components/About';
import SongsContainer from './containers/SongsContainer'
import Form from './components/Form';
import ArtistsContainer from './containers/ArtistsContainer';

class App extends Component {
  
  componentDidMount(){
    this.props.getSongs();
    this.props.getArtists();
  }
  render(){
    if (this.props.loading) {
      return (
        <h3> One Moment Please..... </h3>
      )
    }
    return (
      <Router> 
          <NavBar />
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/about" component={ About } />
            <Route exact path="/songs" component={ SongsContainer } />
            <Route exact path="/songs/new" component={ Form } />
            <Route exact path="/artists" component={ ArtistsContainer } />
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

export default connect(mapStateToProps, { getSongs,getArtists })(App);
