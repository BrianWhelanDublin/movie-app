import styled from "styled-components";
import { device } from "../../assets/styles/breakpoints";
import { DefaultStyleProps } from "../../types/types";

export const StyledReview = styled.div<DefaultStyleProps>`
  background: rgba(255, 250, 250, 0.2);
  border-radius: 5px;
  padding: 5%;

  h3 {
    font-size: 16px;
    margin: 8px 0;

    @media (${device.sm}) {
      font-size: 22px;
    }
  }

  p {
    font-size: 14px;
    @media (${device.sm}) {
      font-size: 18px;
      margin-bottom: 40px;
      max-width: 800px;
    }
  }

  a {
    font-size: 12px;
  }
`;
