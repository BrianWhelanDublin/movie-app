import styled from "styled-components";
import { device } from "../assets/styles/breakpoints";
import { DefaultStyleProps } from "../types/types";

export const SliderContainer = styled.div<DefaultStyleProps>`
	--items-per-screen: 2;
	padding: 20px 0;
	width: 100%;
	overflow-x: scroll;
	overflow-y: hidden;

	@media (${device.xs}) {
		overflow-x: hidden;
		--items-per-screen: 3;
	}
	@media (${device.md}) {
		--items-per-screen: 4;
	}
	@media (${device.lg}) {
		--items-per-screen: 5;
	}
	@media (${device.xl}) {
		--items-per-screen: 6;
	}
	@media (${device.xxl}) {
		--items-per-screen: 7;
	}
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
	aspect-ratio: 16 / 9;
	padding: 0 10px;
`;
