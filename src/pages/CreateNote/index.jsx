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

  const [tag, setTag] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate();

  function handleBack(){
    navigate(-1)
  }

  function handleAddTag(){
    setTag(prevState => [...prevState, newTag]);
    setNewTag("")
  }

  function handleDeleteTag(deleted){
    setTag(prevState => [...prevState.filter(tag => tag !== deleted)])
  }

  async function handleCreateNote(){

    await api.post('/movieNotes', {
      title,
      rating,
      description,
      tag
    });
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
              tag.map((tag, index) => (
                <NoteItem
                  value={tag}
                  index={String(index)}
                  onClick={() => handleDeleteTag(tag)}
                />
              ))
            }

              <NoteItem  
                isNew placeholder="Nova tag"
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <footer>
            <DarkButton title="Excluir filme"/>
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