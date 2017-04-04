//react
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import {AppContainer} from 'react-hot-loader';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//redux
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';

//styles
import Master from './styles/Master.scss';


require('./index.html');

ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    document.getElementById('app-container')
)
