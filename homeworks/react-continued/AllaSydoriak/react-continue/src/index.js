import React from 'react'
import { render } from 'react-dom'
import { compose, createStore } from 'redux'
import todoApp from './reducers'
import Root from './components/Root'

// import rootReducer from '../reducers';
// import persistState, {mergePersistedState} from 'redux-localstorage';
// import adapter from 'redux-localstorage/lib/adapters/localStorage';

let store = createStore(todoApp)

render(
  <Root store={store} />,
  document.getElementById('root')
)