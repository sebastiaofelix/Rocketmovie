import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  width: auto;
  align-items: center;
  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : "none"};
  border-radius: 10px;
  
  
  > button{
    display: flex;
    align-items: center;
    border: none;
    background: none;
    padding: 12px;
    cursor: pointer;
  }
  
  .button-delete {
    color: ${({ theme}) => theme.COLORS.PINK};
  }

  .button-add {
    color: ${({ theme}) => theme.COLORS.PINK};
  }

  > input { 
    display: flex;    
    align-items: center;
    height: 56px;
    padding: 12px;
    width: 150px;
    color: ${({ theme}) => theme.COLORS.WHITE};
    background: transparent;
    border: none;



    &::placeholder{
    color: ${({ theme}) => theme.COLORS.GRAY_300};    
    }
  }
  `;