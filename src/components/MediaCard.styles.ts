import styled, { DefaultTheme } from "styled-components";
import { device } from "../assets/styles/breakpoints";

interface Props {
	theme: DefaultTheme;
}

export const StyledCard = styled.div<Props>`
	/* height: 278px; */
	min-width: 185px;
	margin-right: 20px;

	transition: all 0.3s ease-in-out;
	cursor: pointer;
	border-radius: 5px;
	position: relative;
	.content {
		/* position: absolute;
		bottom: 0;
		right: 10px;
		left: 10px;
		z-index: 2; */
		padding: 5px 10px;
	}

	img {
		width: 185px;
		margin: 0 10px;
		border-radius: 5px;
		z-index: -1;
	}
	/* 
	&::after {
		position: absolute;
		z-index: 1;
		content: "";
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 5%, rgba(0, 0, 0, 0));
	} */

	@media (${device.xl}) {
		/* height: 450px; */
		min-width: 297px;
		margin-right: 40px;
		/* min-width: 440px; */

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
