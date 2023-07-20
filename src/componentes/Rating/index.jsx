import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { Container } from './styles';

export function Rating({ rating, isBigSize }) {
let ratingStars = [];

for(let i = 1; i <= 5; i++){
  if (i <= rating) {
    ratingStars.push(<AiFillStar key={i} />);
  } else {
    ratingStars.push(<AiOutlineStar key={i} />);
  }
}

return <Container isBigSize={isBigSize}>{ratingStars}</Container>;
}

