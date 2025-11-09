import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './routes/router.jsx'
import ThemeProvider from './contexts/Theme/themeProvider/themeProvider.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </ThemeProvider>
  </StrictMode>
)