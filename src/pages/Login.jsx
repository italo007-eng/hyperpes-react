import { Link } from 'react-router-dom'
import LoginForm from '../components/LoginForm'

function Login() {
  return (
    <div className="row justify-content-center mt-3">
      <div className="col-12 col-md-6 col-lg-4">
        <div className="card p-4">
          <h1 className="mb-3">Login</h1>
          <LoginForm />
          <Link to="/" className="segundario mt-3">Voltar pra página de início</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
