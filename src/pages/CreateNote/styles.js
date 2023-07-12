import styled from 'styled-components'

export const Container = styled.div`
 width: auto;
 height: 100vh;

 > main {
    grid-area: content;
  }

.tags{
    display: flex;
    padding: 16px;    
    flex-wrap: wrap;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_950};
    gap: 12px;
  }
`;

export const Form = styled.form`
  
  width: 0 auto;
  margin: 0 350px 60px 350px;
  overflow-y: auto;

  > header {
    display: flex;
    flex-direction: column;
    height: 172px;
    margin-top: 40px;
    gap: 24px;

    h1{
      font-size: 36px;
    }

    a{
      display: flex;
      align-items: center;
      gap: 2px;
      height: 21px;
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  > section{
    margin-top: -20px;
    display: flex;
    gap: 20px;
    width: 100%;  
  }

  > footer {
    display: flex;
    width: 100%;
    gap: 20px;
  }


`;

export const TitleDiv = styled.div`
  width: 100%;
  gap: 15px;   
`;

  export const TextArea = styled.textarea`
    display: flex;
    width: 100%;
    height: 274px;
    margin: 40px 0;
    background-color: ${({ theme }) => theme.COLORS.GRAY_400};
    padding: 19px 16px;
    border: none;
    border-radius: 10px;
    resize: none;
  `;