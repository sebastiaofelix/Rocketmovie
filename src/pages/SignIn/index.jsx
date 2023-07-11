import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Container, Form, Background } from './styles';
import { Inputs } from '../../componentes/Inputs';
import { Button } from '../../componentes/Button';

import { useState } from 'react'

import { useAuth } from '../../hook/auth';

 
export function SignIn(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn(){
    signIn({ email, password });
  }

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
        onChange={e => setEmail(e.target.value)}
        />

        <Inputs 
        placeholder="Senha"
        type="password"
        icon={FiLock}
        onChange={e => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIn}/>

        <a href="/"> Criar conta </a>

        </main>
      </Form>

      <Background />
    </Container>
  )
}