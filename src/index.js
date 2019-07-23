import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import CarParking from './Car-Parking';
import {createStore, applyMiddleware, compose} from 'redux';
import CarParkingReducer from './Car-Parking/Car-parking-reducer';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(CarParkingReducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><CarParking /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
