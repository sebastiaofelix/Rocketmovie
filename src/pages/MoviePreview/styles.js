import styled from 'styled-components'

export const Container = styled.div`
  width: 0 auto;
  height: 100vh;  

  > main {
    margin: 0 350px 60px 350px;
    overflow-y: auto;  
    
    a{
      margin-top: 40px;
      display: flex;
      align-items: center;
      gap: 2px;
      height: 21px;
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    > header {
      display: flex;
      padding: 12px;
      align-items: center;
      gap: 12px;

      h1 {
        font-size: 28px;
      }

      > div {
      display: flex;
      color: ${({ theme }) => theme.COLORS.PINK};
      align-items: center;
      gap: 5px;
      height: 37px;
      }
    }

    > section {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 10px;
      img{
        height: 16px;
        border-radius: 50%;
      }

      div{
        align-items: center;
        display: flex;
        gap: 7px;
        color: ${({ theme }) => theme.COLORS.PINK};

        p {
          color: ${({ theme }) => theme.COLORS.WHITE};
        }
      }

    ;
    }

    > div {
      margin: 40px 0;
      height: 35px;
    }

    > p {
      text-align: justify;
    }
  }
`;