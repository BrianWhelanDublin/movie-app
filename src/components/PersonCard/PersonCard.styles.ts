import styled from "styled-components";
import { device } from "../../assets/styles/breakpoints";
import { DefaultStyleProps } from "../../types/types";

export const StyledPersonCard = styled.div<DefaultStyleProps>`
  background: rgba(255, 250, 250, 0.2);
  border-radius: 5px;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
    max-height: 300px;
  }

  @media (${device.md}) {
    min-height: 360px;
    color: ${(props) => props.theme.colors.grey2};
    transition: all 0.2s ease-in-out;
    &:hover {
      color: ${(props) => props.theme.colors.white};
      background: rgba(255, 250, 250, 0.4);
      transform: scale(1.02);
    }
  }
`;

export const StyledPersonTitle = styled.div<DefaultStyleProps>`
  padding: 8px;
  min-height: 80px;
  h3 {
    font-size: 14px;
    letter-spacing: 2px;
    @media (${device.md}) {
      font-size: 18px;
    }
  }
  p {
    font-size: 12px;
    letter-spacing: 2px;
    @media (${device.md}) {
      font-size: 14px;
    }
  }
`;
