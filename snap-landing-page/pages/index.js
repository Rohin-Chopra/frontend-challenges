import Head from 'next/head';
import Image from 'next/image';
import { Fragment } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Snap Landing Page</title>
      </Head>
      <Navbar />
      <main>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 pt-8 lg:px-32 container mx-auto">
          <div className="pt-16 text-center lg:text-left">
            <h1 className="font-bold text-4xl lg:text-7xl">Make remote work</h1>
            <p className="mt-4 text-gray text-lg">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <button className="bg-black text-white cursor-pointer px-6 py-3 rounded-2xl mt-6 border hover:bg-almostWhite hover:border hover:border-black hover:text-black transition-colors duration-300">
              Learn More
            </button>
            <div className="grid grid-cols-4 gap-x-4 lg:gap-x-8 mt-16 lg:mt-32 px-4 lg:px-0">
              <Image src="/client-databiz.svg" width={50} height={25} />
              <Image src="/client-audiophile.svg" width={50} height={25} />
              <Image src="/client-maker.svg" width={50} height={25} />
              <Image src="/client-meet.svg" width={50} height={25} />
            </div>
          </div>
          <div className="ml-auto">
            <div className="hidden lg:block">
              <Image src="/image-hero-desktop.png" width={400} height={550} />
            </div>
            <div className="lg:hidden">
              <Image src="/image-hero-mobile.png" width={750} height={550} />
            </div>
          </div>
        </div>
      </main>
      <footer className="py-8 text-gray text-center">
        Developed By Rohin Chopra
        <div className="flex justify-center text-4xl">
          <a
            className="mr-4 cursor-pointer"
            href="https://www.linkedin.com/in/rohin-chopra-2b38791a0/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaLinkedin className="hover:text-linkedin transition-colors duration-300" />
          </a>
          <a
            className="mr-4 cursor-pointer"
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
