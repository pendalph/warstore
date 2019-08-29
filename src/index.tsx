import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './modules/configureStore';
import App from 'components/App';
import './styles/index.scss';

const TARGET_ROOT = document.querySelector('#root');

const store = configureStore();

render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    TARGET_ROOT
);