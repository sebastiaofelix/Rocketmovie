import { Container, Content } from './styles';
import { FiPlus, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import { Header } from '../../componentes/Header';
import { Button } from '../../componentes/Button';
import { Note } from '../../componentes/Note';
import { Inputs } from '../../componentes/Inputs'
import { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom';



export function Home(){
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();


  function handleNav(id){
    navigate(`/moviePreview/${id}`)
  }

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/movieNotes?title=${search}`);
      setNotes(response.data);
    }
    
    fetchNote();
  },[search])

  return(
    <Container>
      <Header>
        <Inputs
        icon={FiSearch}
        onChange={e => setSearch(e.target.value)}
        placeholder='Procurar filmes'
        />
      </Header>
       <main>
        <section>
          <h1>Meus Filmes</h1>
          
          <div>
            <Link className='link' to="/createNote">
            <Button         
              title="Adicionar filme"
              icon={FiPlus}               
            />
            </Link>
          </div>
        </section>

        <Content>
        {notes.map(note => (
          <Note
            key={String(note.id)}
            data={note}
            onClick={() => handleNav(note.id)}                         
          />            
          ))}           
        </Content>
       </main>       
    </Container>
  );

}