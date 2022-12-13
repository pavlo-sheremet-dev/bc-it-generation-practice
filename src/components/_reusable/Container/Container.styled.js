import styled from 'styled-components';

export const ContainerStyled = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: ${({ disableXPaddings }) => (disableXPaddings ? 0 : '0 20px')};
  padding-top: ${({ pt }) => (pt ? pt + 'px' : '10px')};
  padding-bottom: ${({ pb }) => (pb ? pb + 'px' : '10px')};
  background-color: 'gray';
`;
