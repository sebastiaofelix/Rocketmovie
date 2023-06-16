import styled from 'styled-components'

export const Container = styled.header`
display: flex;
height: 124px;
width: 100%;
justify-content: space-between;
border-bottom-width: 1px;border-bottom-style: solid;
border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

> div {
  display: flex;
  margin-left: 124px;
  align-items: center;

  h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  input{
    height: 56px;
    width: 630px;
    background: transparent;
    border: 0;
    border-radius: 10px;
    padding: 19px 24px;
    margin: 0 64px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }

  &:placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
}
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-right: 124px;

  > img{
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    strong {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
`;