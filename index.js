import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// import todoApp from './reducers'
import App from './containers/App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// let store = createStore(todoApp)

render(
  (
      <MuiThemeProvider>
            <App />
       </MuiThemeProvider>
  ),
  document.getElementById('root')
)