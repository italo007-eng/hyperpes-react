import { Link } from 'react-router-dom'

// Componente reutilizável: o mesmo card serve para as 3 páginas da Home.
// Os dados chegam por PROPS (titulo, texto, destino).
function CardPagina({ titulo, texto, destino }) {
  return (
    <div className="col-12 col-md-4 mb-3">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{texto}</p>
          <Link to={destino} className="btn btn-outline-primary">Acessar</Link>
        </div>
      </div>
    </div>
  )
}

export default CardPagina
