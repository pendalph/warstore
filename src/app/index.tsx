import React from 'react';
import { render } from 'react-dom';

import App from 'app/components/App';

const TARGET_ROOT = document.querySelector('#root');

render(
    <App/>,
    TARGET_ROOT
)