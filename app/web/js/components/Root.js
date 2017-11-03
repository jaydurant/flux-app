import React from 'react';
import { Provider } from 'react-redux';
import App from './app/App.js';
import {
    BrowserRouter as Router
} from 'react-router-dom';

const Root = ({store}) => (
    <Provider store = {store}>
        <Router>
            <App />
        </Router>
    </Provider>
);

export default Root;