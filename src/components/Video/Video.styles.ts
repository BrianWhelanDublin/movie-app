import styled from "styled-components";
import { device } from "../../assets/styles/breakpoints";
import { DefaultStyleProps } from "../../types/types";

export const StyledVideo = styled.div<DefaultStyleProps>`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
  width: 100%;

  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`;

export const StyledVideoContainer = styled.div<DefaultStyleProps>`
  max-width: 1000px;
  margin: 40px auto;
`;
