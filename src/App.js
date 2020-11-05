import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, Authenticator } from 'aws-amplify-react';
// import { ConfirmSignIn, ConfirmSignUp, ForgotPassword, RequireNewPassword, SignIn, SignUp, VerifyContact } from 'aws-amplify-react';
import Amplify, { Auth } from 'aws-amplify';
// import awsmobile from './aws-exports';
// Amplify.configure(awsmobile);

const oauth = {
  domain: 'phantomstack.auth.eu-central-1.amazoncognito.com',
  scope: ['email', 'profile', 'openid'],
  redirectSignIn: 'http://localhost:3000/',
  redirectSignOut: 'http://localhost:3000/',
  responseType: 'code'
};

Auth.configure({
  oauth: oauth,
  region: 'eu-central-1',
  userPoolId: 'eu-central-1_2LYveL5ot',
  userPoolWebClientId: '7fjo546u6phik5a2d1tcp673nn'
});

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Authenticator federated={federated} usernameAttributes='email'/> */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const theme = {
  // googleSignInButton: { backgroundColor: "white", borderColor: "red" },
  button: { backgroundColor: "green", borderColor: "red" },
  oAuthSignInButton: { display: "none" },
  signInButtonIcon: { display: "none" }
};

const signUpConfig = {
  header: 'Sign Up to PhantomStack',
  signUpFields: [
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 1,
      type: 'string'
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 1,
      type: 'password'
    },
  ],
  hideAllDefaults: true,
};

const usernameAttributes = 'email';

const includeGreetings = true;

const authenticatorComponents = []

const federated = {
  google_client_id: '237119201315-vou14k7hdpaukuhda5op0k8sg4k4i4lm.apps.googleusercontent.com'
};

export default withAuthenticator(App, {
  theme,
  includeGreetings,
  authenticatorComponents,
  usernameAttributes,
  federated,
  signUpConfig
});