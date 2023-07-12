import { Container, Profile } from './styles';
import { useAuth } from '../../hook/auth';
import { api } from '../../services/api';
import { Link } from 'react-router-dom'

export function Header(){
  const { signOut, user } = useAuth();

  function handleSignOut(){
    signOut();
  }

  const avatarUrl = `${api.defaults.baseURL}/files/${user.avatar}`;

  return(
    <Container>
      <main>
        <h1>RocketMovies</h1>
        <input
        type="text"
        placeholder='Pesquisar pelo Título'
        />
      </main>

        <Profile >
          <div>
            <Link to={'/profile'}>
              <img src={avatarUrl} 
                alt="Foto de usuário"
              />
            </Link>
          </div>

          <div>
            <span>{user.name}</span>
            <a href="/" onClick={handleSignOut}>sair</a>
          </div>          
        </Profile>
    </Container>
  )
}