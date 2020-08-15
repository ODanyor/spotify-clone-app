import React from 'react'
import ReactDOM from 'react-dom'
import App from './shared/components/App'
import * as serviceWorker from './serviceWorker'
import 'shared/static/styles.css'

import { theme } from '@chakra-ui/core'
import { ThemeProvider } from '@chakra-ui/core'

import { StateProvider } from 'shared/service/context'
import reducer, { initialState } from 'shared/service/reducer'

ReactDOM.render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
