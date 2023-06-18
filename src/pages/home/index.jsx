import { Container, Content } from './styles'
import { FiPlus } from 'react-icons/fi'

import { Header } from '../../componentes/Header'
import { Button } from '../../componentes/Button'
import { Note } from '../../componentes/Note'



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
        <Note data={{
          title: 'Miles Morales 2',
          tags: [
            {id: '1', name:'animação'},
            {id: '2', name:'ação'}
          ]
        }}
          />         
      </Content>      
    </Container>
  )
}