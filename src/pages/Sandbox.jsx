import { Link } from 'react-router-dom'

function Sandbox() {
  return (
    <>
      <h1>página sandbox</h1>
      <hr />
      <h2 className="audio">Áudio</h2>
      <audio controls>
        <source src="/audio/a-vida.mpeg" type="audio/mpeg" />
      </audio>
      <hr />
      <h3 className="video">Video</h3>
      {/* "ratio ratio-16x9" (Bootstrap) deixa o vídeo responsivo mantendo a proporção */}
      <div className="ratio ratio-16x9" style={{ maxWidth: '560px' }}>
        <iframe
          src="https://www.youtube.com/embed/lu2EY6D7pdM"
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>
      <br />
      <Link className="segundario" to="/">voltar pra página de inicio</Link>
    </>
  )
}

export default Sandbox
