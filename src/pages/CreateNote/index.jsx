import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import { Container, Form, TextArea, TitleDiv } from './styles'
import { Header } from '../../componentes/Header' 
import { Inputs } from '../../componentes/Inputs' 
import { NoteItem } from '../../componentes/NoteItem' 
import { Section } from '../../componentes/Section' 
import { Button } from '../../componentes/Button' 
import { DarkButton } from '../../componentes/DarkButton' 


export function CreateNote(){
  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <a href="/"> <FiArrowLeft /> Voltar </a>
            <h1>Novo Filme</h1>
          </header>

          <section>
            <TitleDiv>
              <Inputs placeholder="Titulo"/>
            </TitleDiv>
            <TitleDiv>
              <Inputs placeholder="Sua nota (0 a 5)"/>
            </TitleDiv>
          </section>

          <TextArea placeholder="Obeservações"/>  

          <Section title="Marcadores">
            <content className='tags'> 
            <NoteItem value="Action"/>
            <NoteItem isNew placeholder="Nova tag"/>
            </content>
          </Section>

          <footer>
            <DarkButton title="Excluir filme"/>
            <Button title="Salvar alterações"/>
          </footer>
          
        </Form>
      </main>
    </Container>
  )
};