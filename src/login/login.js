import React from 'react';
import { Grid } from '@material-ui/core'

const CLIENT_ID = '9733c453597e8758ba7c';
const REDIRECT_URI = 'http://localhost:3000/auth';

export class Login extends React.Component {

  render() {
    return (
      <Grid container justify="center" alignItems="center" direction="column">
        <h1>Sign In With</h1>
        <a href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
        >Github</a>
      </Grid>
    )
  }
}