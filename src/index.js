// normal react setup
import React from 'react';
import ReactDOM from 'react-dom';
// redux setup to create a shared data store for components
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
// allows for asyncronous actions in the store
import thunkMiddleware from 'redux-thunk';
// allows for persistence of the store on hot reloading
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to local storage
import { PersistGate } from 'redux-persist/integration/react';
// import my app and reducers for the store
import App from './App';
import rootReducer, { initialState } from './reducers';
// service worker for offline and faster loading
import * as serviceWorker from './serviceWorker';

const persistConfig = {
  key: 'root',
  storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewareEnhancer = applyMiddleware(thunkMiddleware);
const enhancer = composeEnhancers(middlewareEnhancer);
const store = createStore(persistedReducer, initialState, enhancer);
let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
