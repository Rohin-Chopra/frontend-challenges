import Image from 'next/image';
import {
  StyledFooter,
  StyledLinksContainer,
  StyledSocialMediasContainer,
} from './style';

const Footer = () => {
  return (
    <StyledFooter>
      <h5>sunnyside</h5>
      <StyledLinksContainer>
        <a>About</a>
        <a>Services</a>
        <a>Projects</a>
      </StyledLinksContainer>
      <StyledSocialMediasContainer>
        <a>
          <Image
            src="/icon-facebook.svg"
            width={15}
            height={15}
            alt="facebook link for sunnyside"
          />
        </a>{' '}
        <a>
          <Image
            src="/icon-instagram.svg"
            width={15}
            height={15}
            alt="instagram link for sunnyside"
          />
        </a>{' '}
        <a>
          <Image
            src="/icon-twitter.svg"
            width={15}
            height={15}
            alt="Twitter link for sunnyside"
          />
        </a>
        <a>
          <Image
            src="/icon-pinterest.svg"
            width={15}
            height={15}
            alt="pinterest link for sunnyside"
          />
        </a>
        <p>Challenge by Frontend Mentor</p>
        <p className="mt-4 -mb-2">
          Developed by{' '}
          <a
            href="https://rohinchopra.com"
            target="_blank"
            rel="noreferrer"
            className="!m-0"
          >
            Rohin Chopra
          </a>
        </p>
        <div className="flex justify-center text-4xl">
          <a
            className="mr-4 cursor-pointer hover:text-linkedin"
            href="https://www.linkedin.com/in/rohin-chopra-2b38791a0/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src="/icon-linkedin.svg"
              width={15}
              height={15}
              alt="linkedin link for Rohin Chopra"
            />{' '}
          </a>
          <a
            className="mr-4 cursor-pointer hover:text-github"
            href="https://github.com/Rohin1212"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src="/icon-github.svg"
              width={15}
              height={15}
              alt="github link for Rohin Chopra"
            />{' '}
          </a>
        </div>
      </StyledSocialMediasContainer>
    </StyledFooter>
  );
};

export default Footer;
