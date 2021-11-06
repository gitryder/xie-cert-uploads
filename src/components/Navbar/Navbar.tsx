import React from "react";
import styled from "styled-components";
import theme from "../../theme";

const StyledNav = styled.nav`
  min-width: 100vw;
  background-color: white;
  padding-left: 64px;

  p {
    font-size: 20px;
    font-weight: ${theme.fontWeights.black};
    color: ${theme.colors["blue-2"]};
  }
`;

interface NavbarProps {
  title: string;
}

const Navbar = ({ title }: NavbarProps): JSX.Element => {
  return (
    <React.Fragment>
      <StyledNav>
        <p>{title}</p>
      </StyledNav>
    </React.Fragment>
  );
};

export { Navbar };
export type { NavbarProps };
