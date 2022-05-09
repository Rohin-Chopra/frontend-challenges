import styled, { css } from 'styled-components';

export const StyledTwoColSection = styled.section`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  @media (min-width: 992px) {
    ${(props) =>
      props.isReverse &&
      css`
        > div:first-of-type {
          order: 2;
        }
      `}
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const StyledTwoColSectionDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 2rem;
  h2 {
    font-family: 'Fraunces', serif;
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
  p {
    line-height: 1.5;
    color: hsl(232, 10%, 55%);
  }
  @media (min-width: 992px) {
    padding: 10rem 4rem;
  }
`;

export const StyledTwoColSectionImage = styled.div`
  position: relative;
  height: 400px;
  @media (min-width: 992px) {
    height: 100%;
    width: 100%;
  }
`;

export const StyledTwoColSectionLink = styled.a`
  display: inline-block;
  font-family: 'Fraunces', serif;
  margin-top: 1.5rem;
  border-bottom: 4px solid;
  align-self: flex-start;
  transition: padding 300ms ease-in-out;
  &:hover {
    padding-bottom: 5px;
  }
`;
