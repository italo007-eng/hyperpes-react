import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css' // Bootstrap vem do npm agora, não mais de um arquivo baixado
import './index.css' // nosso CSS vem DEPOIS do Bootstrap para poder sobrescrevê-lo
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* BrowserRouter habilita as rotas (URLs) em toda a aplicação */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
