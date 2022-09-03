import styled, { DefaultTheme } from "styled-components";
import { device } from "../assets/styles/breakpoints";

interface Props {
	theme: DefaultTheme;
}

export const StyledRow = styled.section<Props>`
	padding: 5%;
	.title {
		font-weight: ${(props) => props.theme.fontWeights.medium};
		letter-spacing: 4px;
		text-transform: uppercase;
		font-size: 20px;
	}

	@media (${device.sm}) {
		padding: 0 10%;
		.title {
			font-size: 30px;
		}
	}
`;

export const StyledCardContainer = styled.div<Props>`
	padding: 20px 0;
	width: 100%;
	overflow: hidden;
`;

export const StyledInnerContainer = styled.div<Props>`
	display: flex;
	flex-direction: row;
	transition: all 0.2s ease-in-out;
`;
