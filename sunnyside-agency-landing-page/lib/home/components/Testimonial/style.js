import styled from 'styled-components';

export const StyledTestimonial = styled.div`
  padding: 1rem;
  text-align: center;
  img {
    border-radius: 50%;
  }

  .testimonial {
    color: hsl(213, 9%, 39%);
    margin: 1.5rem 0;
    font-size: 16px;
  }
  .name {
    margin-bottom: 0.75rem;
    font-family: 'Fraunces', serif;
  }
  .job-title {
    color: hsl(232, 10%, 55%);
    font-size: 11px;
  }
  @media (min-width: 992px) {
    padding: 2rem;
    .testimonial {
      margin: 2.5rem 0;
      font-size: 14px;
    }
    .job-title {
      font-size: 13px;
    }
  }
`;
