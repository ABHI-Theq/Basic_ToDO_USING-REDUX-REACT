import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AddTodo from './components/AddTodo.jsx' 
import Todos from './components/Todos.jsx'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AddTodo />
    <Todos/>
  </Provider>
)
