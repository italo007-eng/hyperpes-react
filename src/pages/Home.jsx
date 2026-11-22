import CardPagina from '../components/CardPagina'

// Dados dos cards em um array: para adicionar um card novo, basta incluir um item aqui
const paginas = [
  { titulo: 'Lista de atividades', texto: 'Página com a lista de itens da atividade-3.', destino: '/lista' },
  { titulo: 'Sandbox', texto: 'Espaço para testar conceitos aprendidos (áudio, vídeo, CSS externo).', destino: '/sandbox' },
  { titulo: 'Paleta de cores', texto: 'Cor principal, tipo de paleta e justificativa do tema do projeto.', destino: '/paleta-cores' },
]

function Home() {
  return (
    <>
      <h1 className="display-4">Nascimento de seu projeto</h1>
      <h2 className="text-muted">Hyperpes</h2>
      <p className="lead">
        O Hyperpes é um sistema de pesquisa voltado para diferentes perfis geracionais,
        com foco em auto-adaptação para uma melhor interação na resolução do problema.
      </p>

      <div className="row mt-4">
        {paginas.map((p) => (
          <CardPagina key={p.destino} titulo={p.titulo} texto={p.texto} destino={p.destino} />
        ))}
      </div>
    </>
  )
}

export default Home
