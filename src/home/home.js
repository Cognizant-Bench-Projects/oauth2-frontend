import { Button } from '@material-ui/core';
import React from 'react';
import { Redirect } from 'react-router-dom';

export class Home extends React.Component {

  componentDidMount() {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      this.props.setAuthenticated(false);
    }
  }

  logout() {
    localStorage.clear();
    this.props.setUser('');
    this.props.setAuthenticated(false);
  }

  render() {
    return (
      <div>
        {this.props.authenticated ? (
          <div>
            <br />
            <Button variant="contained" onClick={()=>this.logout()}>Logout</Button>
            <h1>Welcome {this.props.user}</h1>
          </div>
        ) : <Redirect to="/login" />}
      </div>
    )}
}