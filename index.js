import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';
import { setupAxiosInterceptors } from './utils/auth';

setupAxiosInterceptors(store);

ReactDOM.render(<App />, document.getElementById('root'));