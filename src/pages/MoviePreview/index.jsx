import { Container } from './styles';
import { FiArrowLeft, FiStar, FiClock } from 'react-icons/fi';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { Header } from '../../componentes/Header';
import { Tags } from '../../componentes/Tags';
import { Rating } from '../../componentes/Rating';
import { Button } from '../../componentes/Button'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from '../../hook/auth';

import { api } from '../../services/api';


export function MoviePreview(){
  const params = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  function handleBack(){
    navigate(-1)
  }

  async function handleRemove(){
    const confirm = window.confirm('Deseja deletar este filme?')

    if(confirm){
      setLoading(true);
      try{
        await api.delete(`/movieNotes/${params.id}`);
        navigate(-1);
      }
      catch(error) {
        if(error.response){
          alert(error.response.data.message);
        } else {
          alert('Erro ao deletar o filme');
          console.log("Erro ao remover o filme:", error);
        }
      } finally {
        setLoading(false);
      }      
    }
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
      {data &&
        <main>
          <a href='/'> <FiArrowLeft /> Voltar</a>

          <header>
            <h1>{data.title}</h1>
            <div>
              <Rating rating={data.rating}/>
            </div>
          </header>

          <section>
            <img src={avatarURL} 
                alt={user.name} />
            <p>Por</p>
            <span>{user.name}</span>

            <div>
              <FiClock />
              <p>{user.updated_at}</p>
            </div>        
          </section>

          {
            data.tags && (
          <div>
              {data.tags.map( tag => (
                <Tags key={tag.id} title={tag.name}/>   
              ))}
          </div>
          )}

          <p>{data.description}</p>

          <footer>
            <Button 
              title="Excluir"
              onClick={handleRemove}
              loading={loading}
            />
          </footer>

        </main>
      }
    </Container>
    
  )
}