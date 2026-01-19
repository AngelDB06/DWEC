import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Myapp from './Myapp.jsx'
import Pruebas from './pages/Pruebas.jsx'
import { BrowserRouter } from 'react-router'
import { Navegacion } from './components/Navegacion.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <StrictMode>
            <Myapp />
        </StrictMode>
    </BrowserRouter>

)
