import styled from "styled-components";
import { device } from "../../assets/styles/breakpoints";
import { DefaultStyleProps } from "../../types/types";

interface SliderProps extends DefaultStyleProps {
  singleSlide?: boolean;
}

export const SliderContainer = styled.div<SliderProps>`
  --items-per-screen: ${(props) => (props.singleSlide ? 1 : 2)};
  padding: 20px 0;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;

  @media (${device.xs}) {
    overflow-x: hidden;
    --items-per-screen: ${(props) => (props.singleSlide ? 1 : 3)};
  }
  @media (${device.md}) {
    --items-per-screen: ${(props) => (props.singleSlide ? 1 : 4)};
  }
  @media (${device.lg}) {
    --items-per-screen: ${(props) => (props.singleSlide ? 1 : 5)};
  }
  @media (${device.xl}) {
    --items-per-screen: ${(props) => (props.singleSlide ? 1 : 6)};
  }
  /* @media (${device.xxl}) {
		--items-per-screen: ${(props) => (props.singleSlide ? 1 : 7)};
	} */
`;

export const SliderInnerContainer = styled.div<DefaultStyleProps>`
  display: flex;
  flex-direction: row;
  transition: all 0.2s ease-in-out;
  max-width: 100%;
`;

export const ArrowContainer = styled.div<DefaultStyleProps>`
  display: none;

  @media (${device.sm}) {
    font-size: 25px;
    float: right;
    width: 80px;
    display: flex;
    justify-content: space-between;

    svg {
      transition: all 0.2s ease-in-out;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;

export const SliderItem = styled.div<DefaultStyleProps>`
  flex: 0 0 calc(100% / var(--items-per-screen));
  max-width: calc(100% / var(--items-per-screen));
  /* img {
		aspect-ratio: 16 / 9;
	} */
  padding: 0 10px;
`;
