import styled, { DefaultTheme } from "styled-components";
import { device } from "../assets/styles/breakpoints";
import { DefaultStyleProps } from "../types/types";

export const StyledCard = styled.div<DefaultStyleProps>`
	min-width: 185px;
	margin-right: 20px;
	transition: all 0.3s ease-in-out;
	cursor: pointer;
	border-radius: 5px;
	position: relative;
	.content {
		padding: 5px 10px;
	}

	img {
		width: 185px;
		margin: 0 10px;
		border-radius: 5px;
		z-index: -1;
	}

	@media (${device.xl}) {
		min-width: 297px;
		margin-right: 40px;

		img {
			width: 400px;
			margin: 0 20px;
			border-radius: 5px;
		}
	}

	&:hover {
		transform: scale(1.05);
	}
`;
