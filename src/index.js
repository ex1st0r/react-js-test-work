import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'
import {App} from './components'
import reducers from './reducers'
import logger from 'redux-logger'

import './index.css'

let store = createStore(
    reducers,
    applyMiddleware(thunk, logger)
)

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root-container')
)





