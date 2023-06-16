import { Container, Content } from './styles'
import { FiPlus } from 'react-icons/fi'

import { Header } from '../../componentes/Header'
import { Button } from '../../componentes/Button'


export function Home(){
  return(
    <Container>
      <Header />
      <section>
        <h1>Meus Filmes</h1>
        <Button         
        title="Adicionar filme"
        icon={FiPlus}       
        />
      </section>

      <Content>
        <h1>Introdução ao React</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam est, voluptatibus,
          assumenda corporis adipisci vero facilis saepe ratione blanditiis aspernatur tempore
            suscipit dolorum commodi velit rem molestias! Numquam, assumenda quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam est, voluptatibus,
          assumenda corporis adipisci vero facilis saepe ratione blanditiis aspernatur tempore
            suscipit dolorum commodi velit rem molestias! Numquam, assumenda quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam est, voluptatibus,
          assumenda corporis adipisci vero facilis saepe ratione blanditiis aspernatur tempore
            suscipit dolorum commodi velit rem molestias! Numquam, assumenda quos.
        </p>
      </Content>      
    </Container>
  )
}