import Image from 'next/image';
import PropTypes from 'prop-types';
import { StyledTestimonial } from './style';

const Testimonial = ({ name, jobTitle, testimonial, img }) => {
  return (
    <StyledTestimonial>
      <div>
        <Image src={img.url} alt={img.alt} width={60} height={60} />
      </div>
      <p className="testimonial">{testimonial}</p>
      <h5 className="name">{name}</h5>
      <p className="job-title">{jobTitle}</p>
    </StyledTestimonial>
  );
};

Testimonial.propTypes = {
  img: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string,
  }),
  name: PropTypes.string,
  jobTitle: PropTypes.string,
  testimonial: PropTypes.string,
};

export default Testimonial;
