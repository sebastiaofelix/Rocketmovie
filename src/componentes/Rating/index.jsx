import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { Container } from './styles';

export function Rating({ rating }) {
const ratingStars = [<AiOutlineStar/>, <AiOutlineStar/>, <AiOutlineStar/>, <AiOutlineStar/>, <AiOutlineStar/>];

for(let i = 0; i < rating; i++){
  ratingStars[i] = <AiFillStar/>;
}

return (
  <Container>
    {...ratingStars}
  </Container>
 )
}

