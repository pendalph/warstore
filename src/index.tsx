import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'modules/configuredStore';
import 'styles/main.scss';

import App from 'components/App';

const TARGET_ROOT = document.querySelector('#root');

render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    TARGET_ROOT
);