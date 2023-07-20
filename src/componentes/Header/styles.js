import styled from 'styled-components'

export const Container = styled.header`
display: flex;
height: 124px;
max-width: 1200px;
width: 100%;
margin: 0 auto;
justify-content: space-between;
border-bottom-width: 1px;border-bottom-style: solid;
border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

> main {
  display: flex;
  align-items: center;

  h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
}
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  width: 500px;
`;


export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  width: 12%;

  img{
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    a {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      text-decoration: none;
    }
  }
`;