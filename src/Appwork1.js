import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, Authenticator } from 'aws-amplify-react';
// import { ConfirmSignIn, ConfirmSignUp, ForgotPassword, RequireNewPassword, SignIn, SignUp, VerifyContact } from 'aws-amplify-react';
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Authenticator usernameAttributes='email'/>
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

// export default withAuthenticator(App, {
//   signUpConfig: {
//     hiddenDefaults: ["phone_number"],
//     signUpFields: [
//       { label: "Name", key: "name", required: true, type: "string" }
//     ]
// }});

// const MyTheme = {
//   googleSignInButton: { backgroundColor: "red", borderColor: "red" },
//   button: { backgroundColor: "green", borderColor: "red" },
//   signInButtonIcon: { display: "none" }
// };
// export default withAuthenticator(App, false, [], null, MyTheme, "google", {
//   signUpConfig: {
//     hiddenDefaults: ["phone_number"],
//     signUpFields: [
//       { label: "Name", key: "name", required: true, type: "string" }
//     ]
//   }
// });

const signUpConfig = {
  header: 'Sign Up to PhantomStack',
  // signUpFields: [
  //   {
  //     label: 'Email',
  //     key: 'email',
  //     required: true,
  //     displayOrder: 1,
  //     type: 'string'
  //   },
  //   {
  //     label: 'Password',
  //     key: 'password',
  //     required: true,
  //     displayOrder: 1,
  //     type: 'password'
  //   },
  // ],
  // hideAllDefaults: true,
  hiddenDefaults: [
    "phone_number"
  ],
};

const usernameAttributes = 'email';

const federated = {
  google_client_id: '237119201315-vou14k7hdpaukuhda5op0k8sg4k4i4lm.apps.googleusercontent.com',
};

export default withAuthenticator(App, {
  usernameAttributes,
  federated,
  signUpConfig
});

// withAuthenticator(Comp: any, 
//   includeGreetings?: boolean, 
//   authenticatorComponents?: any[], 
//   federated?: any, 
//   theme?: any, 
//   signUpConfig?: {}): { new (props: any): { authConfig: any; handleAuthStateChange(state: any, data: any): void; render(): JSX.Element; context: any; setState<K extends string | number | symbol>(state: any, callback?: () => void): void; ... 15 more ...; UNSAFE_componentWillUpdate?(nextProps: Readonly<...>, nextState:  Readonly<...>, nextContext: any): void; }; contextType?: React.Context<...>; }