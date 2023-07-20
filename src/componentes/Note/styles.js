import styled from 'styled-components'


export const Container = styled.button`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 223px;
    padding: 32px;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    border: none;
    margin-bottom: 20px;
    cursor: pointer;

    >  h1{
      margin-bottom: 5px;
      font-size: 24px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > p {
      height: 48px;
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      display: -webkit-box;
      -webkit-line-clamp: 3;
      overflow: hidden;
      line-height: 22px;
      text-overflow: ellipsis;
      text-align: justify;
    }

    > footer {
    width: 100%;
    display: flex;
    margin-top: 15px;
    }
`;