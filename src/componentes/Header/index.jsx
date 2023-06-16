import { Container, Profile } from './styles'

export function Header(){
  return(
    <Container>
      <main>
        <h1>RocketMovies</h1>
        <input
        type="text"
        placeholder='Pesquisar pelo Título'
        />
      </main>

        <Profile>
          <img src="https://github.com/sebastiaofelix.png" 
            alt="Foto de usuário" />

          <div>
            <span>Sebastiao Felix</span>
            <strong>sair</strong>
          </div>          
        </Profile>
    </Container>
  )
}