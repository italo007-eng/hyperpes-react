// Cor do badge para cada status (objeto usado como "dicionário")
const coresStatus = {
  Ativo: 'bg-success',
  Inativo: 'bg-secondary',
  Pendente: 'bg-warning text-dark',
}

// Recebe a lista de usuários e a função de excluir por PROPS
function UserTable({ usuarios, onExcluir }) {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {/* map() transforma cada usuário do array em uma linha da tabela.
            key é obrigatória: ajuda o React a identificar cada linha. */}
        {usuarios.map((u) => (
          <tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.nome}</td>
            <td>{u.email}</td>
            <td>
              <span className={`badge ${coresStatus[u.status]}`}>{u.status}</span>
            </td>
            <td>
              <button className="btn btn-sm btn-warning me-1">Editar</button>
              <button className="btn btn-sm btn-danger" onClick={() => onExcluir(u.id)}>
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UserTable
