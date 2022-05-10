import Head from 'next/head';
import Image from 'next/image';
import { Fragment } from 'react';
import Navbar from '../../components/Navbar';
import Testimonial from './components/Testimonial';
import TwoColSection from './components/TwoColSection';
import {
  StyledGraphicDesignContainer,
  StyledPhotographyContainer,
  StyledHeader,
  StyledGraphicDesignAndPhotographyContainer,
  StyledTwoColSection,
  StyledTestimonialsSection,
  StyledTestimonialsContainer,
  StyledGalleryContainer,
} from './style';

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Sunny Side Agency</title>
      </Head>
      <StyledHeader>
        <Navbar />
        <h1>WE ARE CREATIVES</h1>
      </StyledHeader>
      <TwoColSection
        title="Transform your brand"
        description="We are a full service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do the most of marketing for you."
        img={{ url: '/desktop/image-transform.jpg', alt: 'An egg' }}
        buttonColor="hsl(51, 100%, 49%)"
      />
      <TwoColSection
        title="Stand out to the right audience"
        description=" Using a collaborative formula of designers, researchers,
        photographers, videographers and copywriters, we'll build and
        extend your brand in digital places."
        img={{ url: '/desktop/image-stand-out.jpg', alt: 'An glass' }}
        isReverse
        buttonColor="hsl(7, 99%, 70%)"
      />
      <StyledTwoColSection>
        <StyledGraphicDesignContainer>
          <h2>Graphic Design</h2>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures clients&apos; attention
          </p>
        </StyledGraphicDesignContainer>
        <StyledPhotographyContainer>
          <h2>Photography</h2>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </StyledPhotographyContainer>
        <div></div>
      </StyledTwoColSection>
      <StyledTestimonialsSection>
        <h4>CLIENT TESTIMONIALS</h4>
        <StyledTestimonialsContainer>
          <Testimonial
            img={{ alt: 'ALT', url: '/image-emily.jpg' }}
            name="Emily R."
            jobTitle="Marketing Director"
            testimonial="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
          />
          <Testimonial
            img={{ alt: 'ALT', url: '/image-thomas.jpg' }}
            name="Thomas S."
            jobTitle="Chief Operating Officer"
            testimonial="SunnySide's enthusiasm coupled with their keen interest in our brand's success made it a satisfiable and enjoyable experience."
          />
          <Testimonial
            img={{ alt: 'ALT', url: '/image-jennie.jpg' }}
            name="Jennie F."
            jobTitle="Business Owner"
            testimonial="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommend!"
          />
        </StyledTestimonialsContainer>
      </StyledTestimonialsSection>
      <StyledGalleryContainer>
        <Image
          src="/desktop/image-gallery-milkbottles.jpg"
          width={300}
          height={350}
          alt="Gallery Milkbottle"
        />
        <Image
          src="/desktop/image-gallery-sugarcubes.jpg"
          width={300}
          height={350}
          alt="Gallery Milkbottle"
        />
        <Image
          src="/desktop/image-gallery-cone.jpg"
          width={300}
          height={350}
          alt="Gallery Milkbottle"
        />
        <Image
          src="/desktop/image-gallery-orange.jpg"
          width={300}
          height={350}
          alt="Gallery Milkbottle"
        />
      </StyledGalleryContainer>
    </Fragment>
  );
};

export default Home;
