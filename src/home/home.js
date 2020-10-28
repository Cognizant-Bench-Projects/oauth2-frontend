import { Button } from '@material-ui/core';
import React from 'react';
import { Redirect } from 'react-router-dom';

export class Home extends React.Component {

  logout() {
    this.props.setUser('');
  }

  render() {
    return (
      <div>
        {this.props.user ? (
          <div>
            <br />
            <Button variant="contained" onClick={()=>this.logout()}>Logout</Button>
            <h1>Welcome {this.props.user}</h1>
          </div>
        ) : <Redirect to="/login" />}
      </div>
    )}
}