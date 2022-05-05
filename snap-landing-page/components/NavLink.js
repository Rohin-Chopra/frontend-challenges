const NavLink = ({ className, children, ...props }) => {
  return (
    <a
      {...props}
      className={`text-gray hover:text-black transition-colors duration-300 ${className}`}
    >
      {children}
    </a>
  );
};

export default NavLink;
