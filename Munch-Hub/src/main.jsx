import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Hero from './Components/Hero.jsx'
import HeadlineCards from './Components/HeadlineCards.jsx'
import Foods from './Components/Foods.jsx'
import Category from './Components/Category.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Hero/>
    <HeadlineCards/>
    <Foods/>
    <Category/>
  </StrictMode>,
)
