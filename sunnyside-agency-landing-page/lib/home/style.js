import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
  background-image: url('mobile/image-header.jpg');
  height: 70vh;
  width: 100%;
  background-size: cover;
  color: #fff;
  h1 {
    text-align: center;
    margin-top: 4rem;
    font-family: 'Fraunces', serif;
    font-size: 3rem;
  }
  @media (min-width: 992px) {
    background-image: url('desktop/image-header.jpg');
    height: 75vh;
    h1 {
      font-size: 4rem;
    }
  }
`;

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
