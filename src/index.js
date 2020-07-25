import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';
// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('MOUNT_MOVIES', mountMovies);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// use FETCH_IMAGE action to get movies from database
function* mountMovies(action) {
    try {
        // yield console.log('attempting get');
        const response = yield axios.get('/movies');
        // yield console.log('back with:', response.data);
        yield put({type: 'SET_MOVIES', payload: response.data});
    } catch (error){
        console.log('error with element get request', error);
    }
}

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            console.log('case SET_MOVIES:', action.payload)
            return action.payload;
        default:
            console.log('default case in movies reducer', action.payload)
            return state;
    }
}
// used to store description id
const description = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_ID':
            console.log('case FETCH_ID:', action.payload)
            return action.payload;
        default:
            console.log('default case in description reducer', action.payload)
            return state;
    }
}
// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        description
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
