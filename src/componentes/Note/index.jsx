import { Container } from './styles';
import { Tags } from '../Tags'
import { Rating  } from '../Rating';


export function Note( { data, ...rest }){
  return(
    <Container {...rest}>

      <h1>{data.title}</h1>

      <Rating rating={data.rating} isBigSize={false}/>

      <p>
          {data.description}
      </p> 

      {
        data.movieTags && (
        <footer>
          {
            data.movieTags.map(tag => (
            <Tags key={tag.id} title={tag.name}/>
          ))}   
        </footer>
      )}
    </Container>
  );
}