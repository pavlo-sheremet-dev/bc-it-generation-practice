import styled from 'styled-components';

export const SectionStyled = styled.section`
  padding-top: ${({ pt }) => (pt ? pt + 'px' : '10px')};
  padding-bottom: ${({ pb }) => (pb ? pb + 'px' : '10px')};
  /* background-color: black; */
  /* outline: 1px solid yellow; */
`;
