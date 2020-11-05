import React from 'react';
import { Grid } from '@material-ui/core'

const REDIRECT_URI = 'http://localhost:3000/auth';

export class Login extends React.Component {

  render() {
    return (
      <Grid container justify="center" alignItems="center" direction="column">
        <h1>Sign In With</h1>
        <a href={`http://localhost:8080/oauth2/authorize/github?redirect_uri=${REDIRECT_URI}`}
        >Github</a>
      </Grid>
    )
  }
}