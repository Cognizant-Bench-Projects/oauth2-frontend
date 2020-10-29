import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Login } from './login/login'
import { Home } from './home/home'
import { Auth } from './auth/auth'
import { ErrorPage } from './ErrorPage'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      token: '',
      user: ''
    }
  }

  setUser(username) {
    this.setState({user: username});
  }

  setToken(token) {
    this.setState({token: token});
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/error">
            <ErrorPage />
          </Route>
          <Route exact path="/auth">
            <Auth setUser={this.setUser.bind(this)} setToken={this.setToken.bind(this)} />
          </Route>
          <Route exact path="/home">
            <Home user={this.state.user} setUser={this.setUser.bind(this)} setToken={this.setToken.bind(this)} />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
