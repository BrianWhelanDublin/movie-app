import styled from "styled-components";
import { device } from "../../assets/styles/breakpoints";
import { DefaultStyleProps } from "../../types/types";

export const StyledMediaContainer = styled.div<DefaultStyleProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 5%;
  min-height: 100vh;

  @media (${device.sm}) {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 0;
    margin-left: 240px;
    padding: 2.5% 5%;
    margin-top: 160px;
  }
  @media (${device.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (${device.lg}) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (${device.xl}) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media (${device.xxl}) {
    grid-template-columns: repeat(7, 1fr);
  }
`;
