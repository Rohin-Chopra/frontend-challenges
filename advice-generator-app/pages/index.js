import Head from 'next/head';
import { Fragment, useEffect, useState } from 'react';
import PatternDividerDesktopSVG from './../images/pattern-divider-desktop.svg';
import PatternDividerMobileSVG from './../images/pattern-divider-mobile.svg';
import IconDiceSVG from './../images/icon-dice.svg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SpinningQuote = ({ isLoading }) => (
  <span className={`inline-block ${isLoading ? 'animate-spin' : ''}`}>
    &quot;
  </span>
);

const Home = () => {
  const [advice, setAdvice] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    setAdvice(null);
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setIsLoading(false);
    setAdvice(data.slip);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Advice Generator App</title>
      </Head>
      <main className="flex justify-center items-start h-full px-4">
        <div className="mt-16 pt-8 pb-16 px-6 bg-dark-grayish-glue rounded-lg shadow-lg w-full lg:max-w-lg text-center relative flex flex-col items-center justify-center">
          <p className="text-neon-green text-sm mb-4 font-bold">
            ADVICE #{advice?.id}
          </p>
          <h1 className="text-white text-xl font-extrabold">
            <SpinningQuote isLoading={isLoading} />
            {advice?.advice}
            <SpinningQuote isLoading={isLoading} />
          </h1>
          <div className="mt-8 lg:mt-4">
            <span className="hidden lg:inline">
              <PatternDividerDesktopSVG />
            </span>
            <span className="lg:hidden">
              <PatternDividerMobileSVG />
            </span>
          </div>
          <button
            className="bg-neon-green p-4 cursor-pointer rounded-full absolute -bottom-7 hover:opacity-60 transition-opacity"
            onClick={fetchData}
          >
            <IconDiceSVG className={isLoading ? 'animate-ping' : ''} />
          </button>
        </div>
      </main>
      <footer className="border-t border-neon-green bg-dark-grayish-glue text-neon-green py-4 text-center font-semibold absolute bottom-0 w-full">
        <p className="mb-2">
          Challenge by{' '}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
        </p>
        <p className="mb-2">
          Developed by{' '}
          <a href="https://rohinchopra.com" target="_blank" rel="noreferrer">
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
            <FaLinkedin className="hover:text-linkedin transition-colors duration-300" />
          </a>
          <a
            className="mr-4 cursor-pointer hover:text-github"
            href="https://github.com/Rohin1212"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaGithub className="hover:text-github transition-colors duration-300" />
          </a>
        </div>
      </footer>
    </Fragment>
  );
};

export default Home;
