import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

// Layout = estrutura que se repete em TODAS as páginas (header + conteúdo + footer).
// <Outlet /> é o "buraco" onde o React Router coloca a página da rota atual.
function Layout() {
  return (
    // d-flex + flex-column + min-vh-100 + flex-grow-1 = footer sempre no fim da tela
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="container mt-4 flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
