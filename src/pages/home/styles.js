import styled from 'styled-components'


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content";

  .link {
    text-decoration: none;
  }
  
  > main{
    grid-area: content;
    justify-content: center;
    max-width: 1200px;
    width: 100%;
    margin: 50px auto;
      section{    
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 50px;
    
      h1{
        font-size: 32px;
        font-weight: 400;
      }
    }
  }   
`;

export const Content = styled.div`
  max-height: calc(100vh - 30rem);
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0.8rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 0.8rem;
  }
`;