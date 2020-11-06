import { withOAuth, withGoogle } from 'aws-amplify-react';
import React, { Component } from 'react';
import { Auth, Hub } from 'aws-amplify';

const oauth = {
  domain: 'phantomstacktest.auth.eu-central-1.amazoncognito.com/',
  scope: ['email', 'profile', 'openid'],
  redirectSignIn: 'http://localhost:3000',
  redirectSignOut: 'http://localhost:3000',
  responseType: 'code'
};

Auth.configure({
  oauth: oauth,
  region: 'eu-central-1',
  userPoolId: 'eu-central-1_Rl8lq11GI',
  userPoolWebClientId: '431n6dk9f2c7l2utu34js78elu',
});

class AppOauth extends Component {
  state = { user: null, customState: null };

  componentDidMount() {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          this.setState({ user: data });
          break;
        case "signOut":
          this.setState({ user: null });
          break;
        case "customOAuthState":
          this.setState({ customState: data });
      }
    });

    Auth.currentAuthenticatedUser()
      .then(user => this.setState({ user }))
      .catch(() => console.log("Not signed in"));
  }

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <button onClick={this.props.OAuthSignIn}>
        Sign in
      </button>
      <button onClick={() => Auth.signOut()}>
        Sign Out {user && user.getUsername()}
        </button>
      </div>
      
    )
  }
}

export default withOAuth(AppOauth);