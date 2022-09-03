import styled, { DefaultTheme } from "styled-components";
import { device } from "../assets/styles/breakpoints";

interface Props {
	theme: DefaultTheme;
}

export const StyledCard = styled.div<Props>`
	height: 278px;
	min-width: 185px;
	margin-right: 20px;
	transition: all 0.3s ease-in-out;
	cursor: pointer;

	@media (${device.xl}) {
		height: 450px;
		min-width: 297px;
		margin-right: 40px;
	}

	&:hover {
		transform: scale(1.1);
	}
`;
