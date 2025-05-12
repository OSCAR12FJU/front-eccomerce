import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App'
import { ToastProvider } from './components/ui/home/ToastContainer'
import { CartProvider } from './lib/CartContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <ToastProvider>
    <CartProvider>
    <App />
    </CartProvider>
   </ToastProvider>
  </StrictMode>,
)
