import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.tsx'
import '@/index.css'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { api } from "@/state/api"


// setup api reducer path
export const store = configureStore({
  reducer: { [api.reducerPath]:  api.reducer },
  middleware: (getDefault) => getDefault().concat(api.middleware), // setup configuration for api
})
setupListeners(store.dispatch) // setup listener

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
)
