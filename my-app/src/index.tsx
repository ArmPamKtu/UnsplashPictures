import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import allReducers from './reducers/rootReducer';

import './index.scss';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(allReducers)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
