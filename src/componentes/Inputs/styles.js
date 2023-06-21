import styled from 'styled-components'

export const Container = styled.div`
display: flex;
align-items: center;
width: 100%;

border-radius: 10px;
background-color: ${({ theme }) => theme.COLORS.GRAY_400};
padding: 18px 16px;


  > input{
    width: 100%;
    border: 0;
    background: transparent;
  }
      
  > svg {
    margin-right: 16px;            
  }
`;