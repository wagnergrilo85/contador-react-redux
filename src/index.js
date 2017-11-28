import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './container/AppContainer';
import configStore from './store'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'

const store = configStore()

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
