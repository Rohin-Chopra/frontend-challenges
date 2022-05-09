import Image from 'next/image';
import PropTypes from 'prop-types'; // ES6
import {
  StyledTwoColSection,
  StyledTwoColSectionDescription,
  StyledTwoColSectionImage,
  StyledTwoColSectionLink,
} from './style';

const TwoColSection = ({
  title,
  description,
  img,
  buttonColor,
  isReverse = false,
}) => {
  return (
    <StyledTwoColSection isReverse={isReverse}>
      <StyledTwoColSectionDescription>
        <h2>{title}</h2>
        <p>{description}</p>
        <StyledTwoColSectionLink
          href="#"
          style={{ borderBottomColor: buttonColor }}
        >
          LEARN MORE
        </StyledTwoColSectionLink>
      </StyledTwoColSectionDescription>
      <StyledTwoColSectionImage>
        <Image src={img.url} alt={img.alt} layout="fill" />
      </StyledTwoColSectionImage>
    </StyledTwoColSection>
  );
};

TwoColSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string,
  }),
  buttonColor: PropTypes.string,
  isReverse: PropTypes.bool,
};

export default TwoColSection;
