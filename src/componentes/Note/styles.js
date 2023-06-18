import styled from 'styled-components'


export const Container = styled.button`
    display: flex;
    flex-direction: column;
    grid-area: content;
    margin: 0 350px;
    width: auto;
    height: 223px;
    padding: 32px;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    border: none;

    >  h1{
      margin-bottom: 15px;
      font-size: 24px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
`;