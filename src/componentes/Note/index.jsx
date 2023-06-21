import { Container } from './styles';
import { Tags } from '../Tags'


export function Note( { data, ...rest }){
  return(
    <Container>

      <h1>{data.title}</h1>

      <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor error qui ipsam doloribus voluptatum iste, consequuntur itaque! Maxime recusandae repellat aliquam nesciunt quidem quibusdam dolore quam totam voluptatum. Consequuntur, culpa.
      </p> 

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tags key={tag.id} title={tag.name} />)
          }   
        </footer>
      }
    </Container>
  )
}