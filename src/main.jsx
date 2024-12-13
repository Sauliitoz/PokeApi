import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppWithThemeProvider from './App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWithThemeProvider />
  </StrictMode>,
)
