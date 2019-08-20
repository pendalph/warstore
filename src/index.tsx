import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'modules/configuredStore';

import App from 'components/App';

const TARGET_ROOT = document.querySelector('#root');

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    TARGET_ROOT
);