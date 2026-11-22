import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  // STATE: guarda se o menu hambúrguer está aberto (true) ou fechado (false)
  const [aberto, setAberto] = useState(false)

  // Fecha o menu depois de clicar em algum link (útil no celular)
  const fechar = () => setAberto(false)

  return (
    <nav className="navbar navbar-expand-lg barra-principal">
      <div className="container">
        <Link className="navbar-brand text-white fw-bold" to="/" onClick={fechar}>
          Hyperpes
        </Link>

        {/* EVENTO: onClick alterna o state entre aberto/fechado */}
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Abrir menu"
          onClick={() => setAberto(!aberto)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* RENDERIZAÇÃO CONDICIONAL: a classe "show" só existe quando aberto é true */}
        <div className={`collapse navbar-collapse ${aberto ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/lista" onClick={fechar}>Lista</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/sandbox" onClick={fechar}>Sandbox</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/paleta-cores" onClick={fechar}>Paleta de cores</NavLink>
            </li>
            <li className="nav-item">
              <Link className="btn btn-light btn-sm ms-lg-2" to="/login" onClick={fechar}>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
