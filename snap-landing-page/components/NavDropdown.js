import { Children, cloneElement, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

const NavDropdown = ({ title, children, className, ...props }) => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef();

  const toggleDropdown = () => {
    setIsActive((val) => !val);
  };

  const handleHideDropdown = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleHideDropdown);
    return () => {
      document.removeEventListener('click', handleHideDropdown, true);
    };
  }, []);

  return (
    <div className={`cursor-pointer ${className}`} {...props} ref={ref}>
      <div
        className={classNames({
          'flex items-center hover:text-black transition-colors duration-300': true,
          'text-black': isActive,
          'text-gray': !isActive,
        })}
        onClick={toggleDropdown}
      >
        <div className="mr-1">{title}</div>
        <svg
          className={classNames({
            'transition-transform duration-300': true,
            'rotate-180': isActive,
          })}
          width="10"
          height="6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke={isActive ? '#000' : '#686868'}
            stroke-width="1.5"
            fill="none"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </div>
      <div
        className={classNames({
          'lg:absolute lg:shadow-2xl pl-8 lg:px-8 py-6 rounded-lg text-gray transition-opacity duration-300 lg:bg-white': true,
          'block opacity-100': isActive,
          'hidden opacity-0 pointer-events-none': !isActive,
        })}
      >
        {Children.map(children, (child, index) =>
          cloneElement(child, {
            onClick: toggleDropdown,
            className: `${
              index + 1 !== Children.count(children) ? 'mb-4' : ''
            }  text-gray hover:text-black transition-colors duration-300`,
            style: { ...child.props.style },
          })
        )}
      </div>
    </div>
  );
};

export default NavDropdown;
