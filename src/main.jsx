import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux';
import { store } from './services/store'

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
