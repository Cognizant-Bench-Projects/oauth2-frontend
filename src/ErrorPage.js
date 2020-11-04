import React from 'react';
import { Redirect } from 'react-router-dom';

export class ErrorPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    }
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({
      redirect: true
    }), 5000)
  }

  componentWillUnmount() {
    clearTimeout(this.id);
  }

  render() {
    return (
      this.state.redirect ? 
      <Redirect to="/login" /> :
      <div>
        <h1>Authentification Failed</h1>
        <p>Please <a href={'/login'}>Login</a> Again. Page will redirect soon.</p>
      </div>
    )
  }
}