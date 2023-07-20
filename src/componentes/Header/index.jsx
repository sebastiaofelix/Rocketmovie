import { Container, Profile, Search } from './styles';
import { useAuth } from '../../hook/auth';
import { api } from '../../services/api';
import { Link } from 'react-router-dom'

export function Header({ children }){
  const { signOut, user } = useAuth();

  function handleSignOut(){
    signOut();
  }

  const avatarUrl = `${api.defaults.baseURL}/files/${user.avatar}`;

  return(
    <Container>
      <main>
        <h1>RocketMovies</h1>
      </main>

      <Search>{children}</Search>


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