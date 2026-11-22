import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Lista from './pages/Lista'
import Sandbox from './pages/Sandbox'
import PaletaCores from './pages/PaletaCores'
import Login from './pages/Login'
import Admin from './pages/Admin'

function App() {
  return (
    <Routes>
      {/* Todas as rotas filhas aparecem dentro do Layout (header + footer fixos) */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/lista" element={<Lista />} />
        <Route path="/sandbox" element={<Sandbox />} />
        <Route path="/paleta-cores" element={<PaletaCores />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        {/* Rota coringa: qualquer endereço que não existe cai aqui */}
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Route>
    </Routes>
  )
}

export default App
