import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'
import all_reducers from './reducers/rootReducer'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage'
import store, {persistor} from './store'

// const persistConfig = {
//   key: 'persist-root',
//   storage
// }

// // const persistedReducer = persistReducer(persistConfig, rootReducers)

// const store = createStore(
//   all_reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


