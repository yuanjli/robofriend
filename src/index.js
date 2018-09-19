import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
//import Card from './Card';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
// codealong from https://github.com/aneagoie/robofriends


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
