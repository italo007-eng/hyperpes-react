import { useState } from 'react'
import { Link } from 'react-router-dom'
import UserTable from '../components/UserTable'

// Usuários fictícios "hardcoded" (valor inicial do state)
const usuariosIniciais = [
  { id: 1, nome: 'Ana Souza', email: 'ana.souza@email.com', status: 'Ativo' },
  { id: 2, nome: 'Bruno Lima', email: 'bruno.lima@email.com', status: 'Inativo' },
  { id: 3, nome: 'Carla Mendes', email: 'carla.mendes@email.com', status: 'Ativo' },
  { id: 4, nome: 'Diego Alves', email: 'diego.alves@email.com', status: 'Pendente' },
  { id: 5, nome: 'Elisa Rocha', email: 'elisa.rocha@email.com', status: 'Ativo' },
]

function Admin() {
  const [usuarios, setUsuarios] = useState(usuariosIniciais)

  // filter() devolve um array novo sem o usuário excluído; o React redesenha a tabela
  const excluirUsuario = (id) => {
    setUsuarios(usuarios.filter((u) => u.id !== id))
  }

  return (
    <>
      <h1>Painel Administrativo</h1>
      <p className="text-muted">Lista de usuários cadastrados</p>

      <UserTable usuarios={usuarios} onExcluir={excluirUsuario} />

      {/* RENDERIZAÇÃO CONDICIONAL: mensagem só aparece se a lista ficar vazia */}
      {usuarios.length === 0 && <p className="text-danger">Nenhum usuário cadastrado.</p>}

      <Link to="/">voltar pra página de início</Link>
    </>
  )
}

export default Admin
