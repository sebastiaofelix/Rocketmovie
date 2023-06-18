import styled from 'styled-components'

export const Container = styled.div`
 width: auto;
 height: 100vh;

 > main {
    grid-area: content;
    overflow-y: auto;
  }
`;

export const Form = styled.form`
  > header {
    a{
      text-decoration: none;
    }
  }
`;