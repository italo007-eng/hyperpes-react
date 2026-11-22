import { Link } from 'react-router-dom'

// "class" é palavra reservada do JavaScript; em JSX o atributo se chama className
const variacoes = ['cor-clara', 'cor-media', 'cor-escura']

function PaletaCores() {
  return (
    <>
      <h1>Paleta de Cores do Projeto</h1>
      <hr />

      <h2>Cor principal</h2>
      <div className="cor-amostra cor-principal"></div>
      <p><strong>Cor:</strong> #EE7622 (laranja)</p>
      <p>
        <strong>Justificativa:</strong> O laranja remete a energia e transformação,
        conceitos ligados à proposta do Hyperpes de adaptação entre diferentes perfis geracionais.
      </p>

      <hr />

      <h2>Tipo de paleta</h2>
      <p>Paleta <strong>monocromática</strong>, com variações de tom da cor principal.</p>
      {variacoes.map((v) => (
        <div key={v} className={`cor-amostra ${v}`}></div>
      ))}

      <br /><br />
      <Link className="segundario" to="/">voltar pra página de inicio</Link>
    </>
  )
}

export default PaletaCores
