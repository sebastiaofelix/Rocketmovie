import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import { Container, Form } from './styles'
import { Header } from '../../componentes/Header' 

export function CreateNote(){
  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <a href="/"> <FiArrowLeft /> Voltar </a>
          </header>
        </Form>
      </main>
    </Container>
  )
};