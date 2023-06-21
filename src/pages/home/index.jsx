import { Container, Content } from './styles'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Header } from '../../componentes/Header'
import { Button } from '../../componentes/Button'
import { Note } from '../../componentes/Note'



export function Home(){
  return(
    <Container>
      <Header />
      <section>
        <h1>Meus Filmes</h1>
        <div>
          <Link className="link" to="/createNote">
            <Button         
            title="Adicionar filme"
            icon={FiPlus}       
            />          
          </Link>
        </div>
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