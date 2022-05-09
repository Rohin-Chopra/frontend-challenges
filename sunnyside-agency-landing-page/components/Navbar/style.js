import styled, { css } from 'styled-components';

export const StyledNavbar = styled.nav`
  color: #fff;
  padding: 2rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledNavbarMenu = styled.ul`
  list-style: none;
  @media (max-width: 991.98px) {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    height: 100%;
    width: 100%;
    background-color: hsl(7, 99%, 70%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5rem;
    ${(props) =>
      props.isActive &&
      css`
        transition: transform 150ms ease-in-out;
        transform: translateX(0%);
      `}
  }
  @media (min-width: 992px) {
    position: static;
    display: flex;
    align-items: center;
  }
`;

export const StyledNavbarItem = styled.li`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  @media (min-width: 992px) {
    font-size: 1rem;
    margin: 0 1rem;
  }
`;

export const StyledNavbarLink = styled.a`
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 300ms;
  &:hover {
    opacity: 0.6;
  }
`;

export const StyledContactButton = styled.button`
  font-family: 'Fraunces', serif;
  background-color: #fff;
  color: #000;
  outline: none;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 20px;
  font-weight: bold;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  @media (min-width: 992px) {
    font-size: 1rem;
    font-weight: normal;
  }
`;

export const StyledMenuBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const StyledMenuBar = styled.div`
  margin-bottom: 8px;
  height: 4px;
  width: 30px;
  background-color: #fff;
  transition: transform 300ms ease-in-out;
  ${(props) =>
    props.isActive &&
    css`
      margin-bottom: 0;
    `}
  @media (min-width: 992px) {
    display: none;
  }
`;

export const StyledMenuBar1 = styled(StyledMenuBar)`
  ${(props) =>
    props.isActive &&
    css`
      transform: rotate(405deg);
      margin-bottom: -4px;
    `}
`;

export const StyledMenuBar2 = styled(StyledMenuBar)`
  ${(props) =>
    props.isActive &&
    css`
      display: none;
    `}
`;

export const StyledMenuBar3 = styled(StyledMenuBar)`
  ${(props) =>
    props.isActive &&
    css`
      transform: rotate(-405deg);
    `}
`;
