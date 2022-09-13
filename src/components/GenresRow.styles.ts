import styled, { DefaultTheme } from "styled-components";
import { device } from "../assets/styles/breakpoints";
import { DefaultStyleProps } from "../types/types";

export const StyledGenresRow = styled.section<DefaultStyleProps>`
	padding: 5%;

	@media (${device.sm}) {
		padding: 0 7.5% 5% 7.5%;
	}
`;

export const GenreCard = styled.a<DefaultStyleProps>`
	height: 100%;
	/* min-width: 140px; */
	display: block;
	background: rgba(255, 250, 250, 0.2);
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	/* margin: 0 4px; */
	font-size: 12px;
	text-transform: uppercase;
	letter-spacing: 4px;
	text-align: center;
	padding: 8px;

	@media (${device.sm}) {
		height: 140px;
		/* min-width: 240px; */
		font-size: 18px;
		color: ${(props) => props.theme.colors.grey2};
		transition: all 0.2s ease-in-out;

		&:hover {
			color: ${(props) => props.theme.colors.white};
			background: rgba(255, 250, 250, 0.4);
			transform: scale(1.02);
		}
	}
`;
