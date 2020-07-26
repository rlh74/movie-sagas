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
    yield takeEvery('ADD_MOVIES', addMovies);
    yield takeEvery('ADD_NEW_DESCRIPTION', addDescription);
    yield takeEvery('ADD_NEW_GENRE', addGenre);
    yield takeEvery('ADD_GENRES', getGenres);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// use FETCH_IMAGE action to get movies from database
function* addMovies(action) {
    try {
        // yield console.log('attempting get');
        const response = yield axios.get('/movies');
        // yield console.log('back with:', response.data);
        yield put({type: 'SET_MOVIES', payload: response.data});
    } catch (error){
        console.log('error with element get request', error);
    }
}

// update description saga
function* addDescription(action){
    try {
        yield axios.put('/movies', action.payload);
    } catch (error) {
        console.log('error with addDescription reducer', error);
    }
}

// update genre saga
function* addGenre(action){
    try {
        yield axios.post('/genres', action.payload);
    } catch (error) {
        console.log('error with addGenre saga', error);
    }
}

// gets table row of movies joined with genres
function* getGenres(action){
    try {
        const response = yield axios.get('/genres');
        yield put({type: 'SET_GENRES', payload: response.data});
    } catch (error){
        console.log('error with genres get requestion', error);
    }
}

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}
// used to store description id
const description = (state = '', action) => {
    if (action.type === 'FETCH_ID'){
        return action.payload;
    } else {
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
        description,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
