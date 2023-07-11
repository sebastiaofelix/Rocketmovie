import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Container, Form, Background } from './styles'
import { Inputs } from '../../componentes/Inputs'
import { Button } from '../../componentes/Button'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { api } from '../../services/api'
 
export function SignUp(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp(){
    if(!name || !email || !password){
      return alert("Campos não preenchidos!")
    }
    
    api.post("/users", { name, email, password })
    .then(() => {
      alert("Usuário cadastrado!")
      navigate("/")
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert("Não foi possível cadastrar")
      }
    })
  } 


   return(
     <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h2>Crie sua conta</h2>

        <main>
        <Inputs 
        placeholder="Nome"
        type="text"
        icon={FiUser}
        onChange={e => setName(e.target.value)}
        />
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

        <Button title="Cadastrar" onClick={handleSignUp}/>

        <Link  to='/'>
          <FiArrowLeft /> Voltar para o login
        </Link>

        </main>
      </Form>

      <Background />
    </Container>
  )
}