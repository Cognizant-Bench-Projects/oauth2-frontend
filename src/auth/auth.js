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
    this.exchangeToken();
  }

  exchangeToken() {
    const code = window.location.href.match(/code=(.*)/) && window.location.href.match(/code=(.*)/)[1];

    if (code) {
      axios.get(`http://localhost:8080/api/exchange-token?code=${code}`, {
      headers: { 
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    }).then(
      response => {
        const data = response.data.match(/token=(.*)&scope/);
        if (data) {
          const token = data[1];
          this.getUser(token);
        } else {
          this.setState({
            isLoading: false,
            authFailed: true
          });
        }
      }
    )} else {
      this.setState({
        isLoading: false,
        authFailed: true
      });
    }
  }

  getUser(token) {
    axios.get(`http://localhost:8080/api/user?token=${token}`, {
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
          this.props.setToken(token);
          this.props.setUser(response.data.name);
          this.setState({
            isLoading: false
          })
        }
      }
    )
  }

  render() {
    if (this.state.isLoading) {
      return <h3>Loading...</h3>
    } else {
      return (
        <div>
          {this.state.authFailed ? <Redirect to="/error" /> : <Redirect to="/home" />}
        </div>
      )
    }
  }
}
