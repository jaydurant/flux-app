import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import configureStore from './store/configureStore';

import Root from './components/Root';
import { AppContainer } from 'react-hot-loader';

import style from '../sass/style.scss';

let store = configureStore();

const renderApp = (root,store) => {
    render(
        <AppContainer>
            <Root store={store} />
        </AppContainer>,
        document.getElementById('root')
    )
}

renderApp(Root,store);

if(module.hot){
    module.hot.accept('./components/Root', () => renderApp(Root,store) );
}