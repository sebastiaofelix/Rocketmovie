import { Container, Form } from './styles'
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Inputs } from '../../componentes/Inputs'
import { Button } from '../../componentes/Button'

export function Profile() {
  return(
    <Container>
      <header>
        <a href="/"> <FiArrowLeft /> Voltar </a>
      </header>

      <body>
       <div>
        <img src="https://github.com/sebastiaofelix.png" 
        alt="Foto de usuário" />
        <div><FiCamera /></div>
       </div>
      </body>

      <Form>
        <Inputs 
        placeholder="Usuário"
        type="text"
        icon={FiUser}
        />
        <Inputs 
        placeholder="Email"
        type="text"
        icon={FiMail}
        />
        <Inputs 
        placeholder="Senha Atual"
        type="text"
        icon={FiLock}
        />
        <Inputs 
        placeholder="Nova Senha"
        type="text"
        icon={FiLock}
        />
        <Button title="Salvar"/>
      </Form>
    </Container>
  )
}