import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-image: url('mobile/image-header.jpg');
  height: 70vh;
  width: 100%;
  background-size: cover;
  background-position: 50% 50%;
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
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const StyledGDAndPhotographyBase = styled.div`
  height: 400px;
  background-size: cover;
  background-position: 50% 50%;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 4rem;
  h2 {
    font-family: 'Fraunces', serif;
    font-weight: 800;
    margin-bottom: 1.5rem;
  }
  p {
    max-width: 80%;
    line-height: 1.5;
  }
  @media (min-width: 992px) {
    height: 550px;
    p {
      max-width: 50%;
    }
  }
`;

export const StyledGraphicDesignContainer = styled(StyledGDAndPhotographyBase)`
  background-image: url('/desktop/image-graphic-design.jpg');
  color: hsl(167, 40%, 24%);
`;

export const StyledPhotographyContainer = styled(StyledGDAndPhotographyBase)`
  background-image: url('/desktop/image-photography.jpg');
  color: hsl(198, 62%, 26%);
`;

export const StyledTestimonialsSection = styled.section`
  padding: 4rem 1rem;
  h4 {
    text-align: center;
    font-family: 'Fraunces', serif;
    color: hsl(210, 4%, 67%);
    letter-spacing: 4px;
  }
  @media (min-width: 992px) {
    padding: 6rem 4rem;
  }
`;

export const StyledTestimonialsContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  column-gap: 1rem;
  @media (min-width: 992px) {
    column-gap: 0rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const StyledGalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  @media (min-width: 992px) {
    column-gap: 0rem;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;
