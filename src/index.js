import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const federated = {
//     google_client_id: "237119201315-vou14k7hdpaukuhda5op0k8sg4k4i4lm.apps.googleusercontent.com"
//   };

// ReactDOM.render(<App federated={federated} />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
