import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  width: 100%;
  height: 48px;
  padding: 13.5px;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  border-radius: 10px;
  font-weight: 500;
  border: 0;
  gap: 8px;
  justify-content: center;
  cursor: pointer;  
`;