import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // 1. زيدي هاد السطر
import './index.css'
import App from './App.jsx'
import './components/About.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* 2. غلفي الـ App بـ BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>,
  
)