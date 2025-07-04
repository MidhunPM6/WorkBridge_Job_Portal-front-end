import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import store,{persistor} from './Redux/Store'
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'

const queryClient = new QueryClient()
 
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  
  <Router>
    <QueryClientProvider client={queryClient}>
    <React.StrictMode>

      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
    </QueryClientProvider>
  </Router> 
)
