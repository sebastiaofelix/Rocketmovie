import styled from 'styled-components';

export const Container = styled.div`
 > header{
  display: flex;
  height: 144px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  padding-left: 200px;
  align-items: center;

    a{
    display: flex;
    align-items: center;
    gap: 2px;
    height: 21px;
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
}

 > body {
  display: flex;

    
  > div{
  position: relative;
  margin: -80px auto 0;
  

    img{      
      height: 180px;      
      border-radius: 50%;
    }

    div{
      display: flex;
      height: 50px;
      width: 50px;
      border-radius: 50%;

      background-color: ${({ theme }) => theme.COLORS.PINK};

      align-items: center;
      justify-content: center;

      position: absolute;
      bottom: 7px;
      right: 7px;

      svg {
      font-size: 30px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      }
    }
  }
 } 
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 40px auto 0;
  max-width: 340px;
  gap: 10px;

  > div:nth-child(3){
    margin-top: 10px;
  }
`;