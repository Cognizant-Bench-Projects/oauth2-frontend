import React from 'react';
import { Redirect } from 'react-router-dom';

export class Auth extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    }
  }

  componentDidMount() {
    const token = window.location.href.match(/token=(.*)/) && window.location.href.match(/token=(.*)/)[1];
    if (token) {
      localStorage.setItem("accessToken", token);
      this.props.setAuthenticated(true);
    }

    this.setState({isLoading: false})
  }

  render() {  
    if (this.state.isLoading) {
      return <h3>Loading...</h3>
    } else return (
      <div>
        {this.props.authenticated ? <Redirect to="/home" /> : <Redirect to="/error" />}
      </div>
    )
  }
}
