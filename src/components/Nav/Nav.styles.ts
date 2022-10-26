import styled, { DefaultTheme } from "styled-components";
import { device } from "../../assets/styles/breakpoints";
import { DefaultStyleProps } from "../../types/types";

interface Props {
  theme: DefaultTheme;
}

export const StyledNav = styled.nav<Props>`
  background: linear-gradient(${(props) => props.theme.colors.black}, transparent);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
`;

export const NavList = styled.ul<DefaultStyleProps>`
  display: flex;
  flex-direction: row;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px 40px;
  align-items: center;
  justify-content: space-between;

  @media (${device.sm}) {
    padding: 40px;
  }
`;

export const NavItem = styled.li<DefaultStyleProps>`
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: 14px;
  position: relative;
  border: 1px solid ${(props) => props.theme.colors.white};
  padding: 4px 12px;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;

  @media (${device.sm}) {
    font-size: 16px;
    padding: 8px 18px;
  }
  /* &::after {
		position: absolute;
		content: "";
		width: 0;
		height: 1px;
		bottom: -2px;
		left: 50%;
		background: ${(props) => props.theme.colors.white};
		transition: all 0.2s ease-in;
	} */
  a {
    /* color: ${(props) => props.theme.colors.grey1}; */
    transition: all 0.2s ease-in-out;
  }

  &:hover,
  &.current {
    /* &::after {
      width: 100%;
      left: 0;
    } */
    /* a {
      color: ${(props) => props.theme.colors.brand1};
    } */

    border-color: ${(props) => props.theme.colors.brand1};
  }

  /* &.current {
    a {
      color: ${(props) => props.theme.colors.white};
    }
    &::after {
      width: 100%;
      left: 0;
    }
  } */
`;
