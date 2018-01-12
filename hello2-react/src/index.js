import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, compose, createStore} from 'redux'
import {Provider} from 'react-redux'

import Container from './containers/container'
import reducers from './reducers/reducers'

let composeEnhancers = compose
const enhancers = []
const middleware = []

  if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  }

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(...middleware),
    ...enhancers
  )
)

ReactDOM.render(
  (
    <Provider store={store}>
      <Container />
    </Provider>
  ),
  document.getElementById('root')
)
