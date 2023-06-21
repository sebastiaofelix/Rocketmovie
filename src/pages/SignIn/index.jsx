import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Container, Form, Background } from './styles'
import { Inputs } from '../../componentes/Inputs'
import { Button } from '../../componentes/Button'
 
export function SignIn(){
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h2>Faça seu login</h2>

        <main>
        <Inputs 
        placeholder="Email"
        type="text"
        icon={FiMail}
        />
        <Inputs 
        placeholder="Senha"
        type="text"
        icon={FiLock}
        />

        <Button title="Cadastrar"/>

        <a href="/"> Criar conta </a>

        </main>
      </Form>

      <Background />
    </Container>
  )
}