import { FiArrowLeft } from 'react-icons/fi'
import { Container, Form, TextArea, TitleDiv } from './styles'
import { Header } from '../../componentes/Header' 
import { Inputs } from '../../componentes/Inputs' 
import { NoteItem } from '../../componentes/NoteItem' 
import { Section } from '../../componentes/Section' 
import { Button } from '../../componentes/Button' 
import { DarkButton } from '../../componentes/DarkButton' 
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../hook/auth'
import { api } from '../../services/api'


export function CreateNote(){
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate();

  function handleBack(){
    navigate(-1)
  }

  function handleAddTag(){
    if(!newTag){
      return alert('Digite a tag');
    }

    setTags(prevState => [...prevState, newTag]);
    setNewTag("")
  }

  function handleDeleteTag(deleted){
    setTags(prevState => [...prevState.filter(tag => tag !== deleted)])
  }

  function handleCleanNote(){
    const confirmMovie = confirm("Caso continue perderá suas anotações, deseja prosseguir?")

    if(confirmMovie){
      navigate(-1)
    }
  }

  async function handleCreateNote(){
    if(!title){
      return alert("Digite o título da nota.");
    }

    const validRating = rating >=0 && rating <= 5;
    
    if(!validRating){
      return alert("A nota do filme deve ser entre 0 e 5.");
    }

    if(newTag){
      return alert("Voce deixou uma tag no campo para adicionar, mas não clicou em adicionar. ");
    }    

    await api.post('/movieNotes', {
      title,
      description,
      rating,
      tags,
    });

    alert("Nota criada com sucesso!")
    navigate("/")
  }

  return(
    <Container>

      <Header />

      <main>
        <Form>
          <header>
            <Link onClick={handleBack}> <FiArrowLeft /> Voltar </Link>
            <h1>Novo Filme</h1>
          </header>

          <section>
            <TitleDiv>
              <Inputs 
                placeholder="Titulo"
                onChange={e => setTitle(e.target.value)}
              />
            </TitleDiv>

            <TitleDiv>
              <Inputs 
                placeholder="Sua nota (0 a 5)"
                type="number"
                min="0"
                max="5"
                value={rating}
                onChange={e => setRating(e.target.value)}
              />
            </TitleDiv>
          </section>

          <TextArea 
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />  

          <Section title="Marcadores">
            <div className='tags'> 
            {
              tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleDeleteTag(tag)}
                />
              ))
            }

              <NoteItem  
                isNew 
                placeholder="Nova tag"
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <footer>
            <DarkButton 
            title="Excluir filme"
            onClick={handleCleanNote}
            />
            <Button 
            title="Salvar alterações"
            onClick={handleCreateNote}
            />
          </footer>
          
        </Form>
      </main>
    </Container>
  );
}