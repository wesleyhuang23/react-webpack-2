import React from 'react';
import ReactDOM from 'react-dom';
import App from './../components/App.js';
import {AppContainer} from 'react-hot-loader';

require('./index.html');

ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    document.getElementById('app-container')
)

if(module.hot){
    module.hot.accept('./../components/App.js', () => {
        ReactDOM.render(
            <AppContainer>
                <App />
            </AppContainer>,
            document.getElementById('#app-container')
        );
    });
}