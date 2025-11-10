import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { domAnimation, LazyMotion } from 'framer-motion'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
    <LazyMotion features={domAnimation}>
    <App /></LazyMotion></BrowserRouter>
  </StrictMode>,
)
