import styled from 'styled-components'


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 116px 132px auto;
  grid-template-areas: 
  "header"
  "section"
  "content";
  
  > section {

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 350px;

    h1{
      font-size: 32px;
    }
  }
`;

export const Content = styled.div`


    p {
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
`;