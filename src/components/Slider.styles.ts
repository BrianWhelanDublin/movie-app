import styled, { DefaultTheme } from "styled-components";
import { device } from "../assets/styles/breakpoints";

interface Props {
	theme: DefaultTheme;
}

export const SliderContainer = styled.div<Props>`
	padding: 20px 0;
	width: 100%;
	overflow-x: scroll;
	overflow-y: hidden;

	@media (${device.sm}) {
		overflow-x: hidden;
	}
`;

export const SliderInnerContainer = styled.div<Props>`
	display: flex;
	flex-direction: row;
	transition: all 0.2s ease-in-out;
`;

export const ArrowContainer = styled.div<Props>`
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
