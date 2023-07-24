import { FiMail, FiLock } from 'react-icons/fi';
import { Container, Form, Background } from './styles';
import { Inputs } from '../../componentes/Inputs';
import { Button } from '../../componentes/Button';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';

import { useAuth } from '../../hook/auth';

 
export function SignIn(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  const navigate = useNavigate();

  function handleSignIn(){
    signIn({ email, password });
  }

  function nav(){
    navigate("/register")
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

          <Button title="Entrar" onClick={handleSignIn} />

          <button className="signin" onClick={nav}>Criar Conta</button>

          </main>
      </Form>

      <Background />
    </Container>
  )
}