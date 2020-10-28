import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export class Auth extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      authFailed: false,
      isLoading: true,
    }
  }

  componentDidMount() {
    this.getUser();
  }

  getUser() {
    const code = window.location.href.match(/code=(.*)/) && window.location.href.match(/code=(.*)/)[1];

    if (code) {
      axios.get(`http://localhost:8080/api/user?code=${code}`, {
        headers: { 
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
      }).then(
        response => {
          if (!response.data) {
            this.setState({
              isLoading: false,
              authFailed: true
            })
          }
          else {
            this.props.setUser(response.data.login);
            this.setState({
              isLoading: false
            })
          }
        }
      )
    } else {
      this.setState({
        isLoading: false,
        authFailed: true
      });
    }
  }

  render() {
    if (this.state.isLoading) {
      return <h3>Loading...</h3>
    } else {
      return (
        <div>
          {this.state.authFailed ? <Redirect to="/login" /> : <Redirect to="/home" />}
        </div>
      )
    }
  }
}
