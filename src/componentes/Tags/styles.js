import styled from 'styled-components'


export const Container = styled.span`
  margin-right: 6px;
  border-radius: 5px;
  padding: 5px 16px;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;