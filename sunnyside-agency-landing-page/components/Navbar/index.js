import { useState } from 'react';
import Image from 'next/image';
import {
  StyledContactButton,
  StyledMenuBar1,
  StyledMenuBar2,
  StyledMenuBar3,
  StyledMenuBarContainer,
  StyledNavbar,
  StyledNavbarItem,
  StyledNavbarLink,
  StyledNavbarMenu,
} from './style';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleIsActive = () => setIsActive((state) => !state);

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <StyledNavbar>
      <Image src="/logo.svg" alt="Sunnyside logo" width={124} height={24} />
      <div>
        <StyledNavbarMenu isActive={isActive}>
          <StyledNavbarItem>
            <StyledNavbarLink href="#" onClick={closeMenu}>
              About
            </StyledNavbarLink>
          </StyledNavbarItem>
          <StyledNavbarItem>
            <StyledNavbarLink href="#" onClick={closeMenu}>
              Services
            </StyledNavbarLink>
          </StyledNavbarItem>
          <StyledNavbarItem>
            <StyledNavbarLink href="#" onClick={closeMenu}>
              Project
            </StyledNavbarLink>
          </StyledNavbarItem>
          <StyledNavbarItem>
            <StyledContactButton href="#" onClick={closeMenu}>
              CONTACT
            </StyledContactButton>
          </StyledNavbarItem>
        </StyledNavbarMenu>
        <StyledMenuBarContainer onClick={toggleIsActive}>
          <StyledMenuBar1 isActive={isActive} />
          <StyledMenuBar2 isActive={isActive} />
          <StyledMenuBar3 isActive={isActive} />
        </StyledMenuBarContainer>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
