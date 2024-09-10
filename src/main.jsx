import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style.css"
import Header from './components/Header' 
import { BrowserRouter,Router } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Header/>
 <App/>
 </BrowserRouter>

  

)
