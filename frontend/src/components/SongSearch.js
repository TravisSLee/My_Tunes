import React, { Component } from 'react';
import { changeQuery } from '../actions';
import { connect } from 'react-redux';

class SongSearch extends Component {
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.changeQuery(this.state);
        this.setState({
            query: ''
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className="col-sm-4" type="search">
                <form className="bd-search" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="query">I'm looking for this song...</label>
                        <input className="form-control" type="text" name="query" id="query" onChange={ this.handleChange } />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Search"/>
                </form>
            </div>
        )
    }
    
}


const mapStateToProps = state => {
    
      return {
        query: state.searchReducer.query
      }
    }
  
  export default connect(mapStateToProps, { changeQuery })(SongSearch);
