import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    > h2 {
      font-size: 22px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
`;