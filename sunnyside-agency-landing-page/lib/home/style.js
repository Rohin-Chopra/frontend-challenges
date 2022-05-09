import styled from 'styled-components';

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
    height: 70vh;
    h1 {
      font-size: 2.5rem;
    }
  }
`;
