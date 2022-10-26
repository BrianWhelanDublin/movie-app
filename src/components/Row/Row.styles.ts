import styled from "styled-components";
import { device } from "../../assets/styles/breakpoints";
import { DefaultStyleProps } from "../../types/types";

export const StyledRow = styled.section<DefaultStyleProps>`
  padding: 5%;
  /* max-width: 1400px;
	margin: auto; */
  @media (${device.sm}) {
    padding: 0 7.5% 5% 7.5%;
  }
`;

export const RowTitle = styled.h2<DefaultStyleProps>`
  font-weight: ${(props) => props.theme.fontWeights.medium};
  letter-spacing: 4px;
  text-transform: uppercase;
  font-size: 20px;

  @media (${device.sm}) {
    font-size: 30px;
  }
`;

export const StyledCardContainer = styled.div<DefaultStyleProps>`
  padding: 20px 0;
  width: 100%;
  overflow: hidden;
`;

export const StyledInnerContainer = styled.div<DefaultStyleProps>`
  display: flex;
  flex-direction: row;
  transition: all 0.2s ease-in-out;
`;
