import backgroundImg from '../../assets/background.png'
import styled from 'styled-components'

export const Container = styled.div`
height: 100vh;

display: flex;
align-items: stretch;
`;

export const Form = styled.form`
  padding: 135px;
  
  h1 {
    font-size: 54px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  h2 {
    font-size: 24px;
    margin: 50px 0;
  }

  > main {
    display: flex;
    flex-direction: column;
    gap: 10px;

    a{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2px;
      height: 21px;
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.PINK};
      margin: 124px 0;
    }
  }
`;

export const Background = styled.div`
flex: 1;
background: url(${backgroundImg}) no-repeat center center;
background-size: cover;
`;