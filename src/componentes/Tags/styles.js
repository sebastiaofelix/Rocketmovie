import styled from 'styled-components'


export const Container = styled.span`
  width: auto;
  height: 32px;
  padding: 5px 16px;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;