import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import {AppContainer} from 'react-hot-loader';

//redux
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

import Master from './styles/Master.scss';

const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtensions() : f => f
));

require('./index.html');

ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    document.getElementById('app-container')
)

if(module.hot){
    module.hot.accept('./components/App.js', () => {
        ReactDOM.render(
            <AppContainer>
            <Provider store={store}>
                <App />
            </Provider>
            </AppContainer>,
            document.getElementById('app-container')
        );
    });
}