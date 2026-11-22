import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginForm() {
  // STATES: valores digitados e mensagens de erro de cada campo
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erros, setErros] = useState({ email: '', senha: '' })

  // useNavigate permite trocar de página pelo código (substitui window.location.href)
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault() // impede o recarregamento da página

    const novosErros = { email: '', senha: '' }

    if (email.trim() === '') {
      novosErros.email = 'O e-mail é obrigatório.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      novosErros.email = 'Digite um e-mail válido.'
    }

    if (senha.trim() === '') {
      novosErros.senha = 'A senha é obrigatória.'
    }

    setErros(novosErros)

    // Se nenhum campo tem erro, o login fictício deu certo
    if (!novosErros.email && !novosErros.senha) {
      navigate('/admin')
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">E-mail</label>
        {/* Input controlado: o valor vem do state e cada tecla atualiza o state */}
        <input
          type="email"
          id="email"
          // RENDERIZAÇÃO CONDICIONAL: is-invalid só entra se houver erro
          className={`form-control ${erros.email ? 'is-invalid' : ''}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="invalid-feedback">{erros.email}</div>
      </div>

      <div className="mb-3">
        <label htmlFor="senha" className="form-label">Senha</label>
        <input
          type="password"
          id="senha"
          className={`form-control ${erros.senha ? 'is-invalid' : ''}`}
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <div className="invalid-feedback">{erros.senha}</div>
      </div>

      <button type="submit" className="btn btn-primary w-100">Entrar</button>
    </form>
  )
}

export default LoginForm
