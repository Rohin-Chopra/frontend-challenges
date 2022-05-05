import Image from 'next/image';
import NavDropdown from './NavDropdown';
import NavLink from './NavLink';
import { FaBars } from 'react-icons/fa';
import { MdOutlineClose } from 'react-icons/md';
import classNames from 'classnames';
import { useState } from 'react';
import { overrideTailwindClasses } from 'tailwind-override';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => setIsActive((val) => !val);

  return (
    <header className="pt-8 pb-4 px-6">
      <nav className="flex justify-between w-full">
        <div className="flex justify-between items-center lg:justify-start w-full">
          <div className="mr-10 flex items-center">
            <Image src="/logo.svg" width={84} height={27} />
          </div>
          <FaBars className="lg:hidden text-3xl" onClick={toggleActive} />
          <div
            className={classNames({
              hidden: !isActive,
              'fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-black opacity-70 z-40':
                isActive,
            })}
          ></div>
          <div
            className={overrideTailwindClasses(
              classNames({
                '-right-96 md:-right-[48rem]': !isActive,
                'right-0': isActive,
                'bg-white lg:bg-almostWhite flex flex-col pl-8 pt-4 text-xl lg:text-base lg:p-0 w-4/6 top-0 h-full fixed lg:static lg:h-auto z-40 lg:flex lg:flex-row lg:w-full transition-all duration-300': true,
              })
            )}
          >
            <MdOutlineClose
              className="lg:hidden text-5xl ml-auto text-gray mr-2"
              onClick={toggleActive}
            />
            <NavDropdown className="mb-4 lg:mb-0 mr-8" title="Features">
              <div className="mb-2">
                <Image src="/icon-todo.svg" width={15} height={15} />
                <span className="ml-2">Todo List</span>
              </div>
              <div className="mb-2">
                <Image src="/icon-calendar.svg" width={15} height={15} />{' '}
                <span className="ml-2">Calendar</span>
              </div>
              <div className="mb-2">
                <Image src="/icon-reminders.svg" width={15} height={15} />{' '}
                <span className="ml-2">Reminders</span>
              </div>
              <div>
                <Image src="/icon-planning.svg" width={15} height={15} />{' '}
                <span className="ml-2">Planning</span>
              </div>
            </NavDropdown>
            <NavDropdown title="Company" className="mb-4 lg:mb-0 mr-8">
              <div className="mb-2">History</div>
              <div className="mb-2">Our Team</div>
              <div className="mb-2">Blog</div>
            </NavDropdown>
            <NavLink className="mb-4 lg:mb-0 mr-8" href="#">
              Careers
            </NavLink>
            <NavLink className="mb-4 lg:mb-0 mr-8" href="#">
              About
            </NavLink>
            <div className="flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-end w-full">
              <div className="mb-4 lg:mb-0 mr-8">
                <NavLink href="#">Login</NavLink>
              </div>
              <div className="w-full lg:w-auto pr-8 lg:pr-0">
                <a
                  href="#"
                  className="block lg:inline text-center lg:text-left w-full lg:w-auto py-3 px-4 border-2 border-gray text-gray hover:border-black hover:text-black rounded-xl"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
