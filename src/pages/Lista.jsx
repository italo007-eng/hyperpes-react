import { Link } from 'react-router-dom'

const pecas = ['CPU', 'Placa mãe', 'Gabinete', 'Monitor', 'Teclado']

function Lista() {
  return (
    <>
      <h1>LISTA ORDENADA</h1>
      <img width="200" src="/images/monitor.png" alt="É um desenho de um PC" />
      <hr />
      <h2>Lista de peças para PC</h2>
      <ol>
        {pecas.map((peca) => (
          <li key={peca}>{peca}</li>
        ))}
      </ol>
      <hr />
      <Link className="segundario" to="/">voltar página</Link>
    </>
  )
}

export default Lista
