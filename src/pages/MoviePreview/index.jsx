import { Container } from './styles';
import { FiArrowLeft, FiStar, FiClock } from 'react-icons/fi';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { Header } from '../../componentes/Header';
import { Tags } from '../../componentes/Tags';
import { Rating } from '../../componentes/Rating';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from '../../hook/auth';

import { api } from '../../services/api';


export function MoviePreview(){
  const params = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  
  const [data, setData] = useState(null);

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  function handleNav() {
    navigate('/')
  }

  useEffect(() => {
    async function fetchMovie(){
      const response = await api.get(`/movieNotes/${params.id}`);
      setData(response.data)
    }

    fetchMovie()
  }, []);
  return(
    <Container>

      <Header />

      <main>
        <a href='/'> <FiArrowLeft /> Voltar</a>

        <header>
          <h1>{data.title}</h1>
          <div>
            <Rating />
          </div>
        </header>

        <section>
        <img src={avatarURL} 
            alt={user.name} />
        <p>Por</p>
        <span>{user.name}</span>
        <div>
          <FiClock /> <p>23/05/22 ás 08:00</p>
        </div>        
        </section>
        
        <div>
          {data.tags.map( tag => (
            <Tags key={(String(tag.id))} title={tag.name}/>   
          ))}
        </div>

        <p>{data.description}</p>

      </main>
    </Container>
    
  )
}