import styled from "styled-components";
import { device } from "../assets/styles/breakpoints";
import { DefaultStyleProps } from "../types/types";

export const StyledHeader = styled.section<DefaultStyleProps>`
	width: 100vw;
	height: 75vh;
	min-height: 300px;
	position: relative;

	@media (${device.sm}) {
		height: 80vh;
		min-height: 600px;
	}

	&::after {
		content: "";
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		z-index: 1;
		background: ${(props) => props.theme.gradient};
	}
`;

export const HeaderContent = styled.div<DefaultStyleProps>`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 10%;
	position: relative;
	z-index: 2;

	@media (${device.sm}) {
		margin-right: auto;
		padding: 10% 10% 5% 7.5%;
	}

	@media (${device.lg}) {
		width: 75%;
		padding: 10% 10% 10% 7.5%;
	}

	@media (${device.xl}) {
		width: 65%;
	}
`;

export const HeaderTitle = styled.h1<DefaultStyleProps>`
	font-size: 38px;
	text-transform: uppercase;
	letter-spacing: 10px;
	font-weight: ${(props) => props.theme.fontWeights.regular};
	margin-bottom: 20px;

	@media (${device.sm}) {
		font-size: 48px;
		margin-bottom: 10px;
	}

	@media (${device.md}) {
		font-size: 70px;
		margin-bottom: 30px;
	}
`;

export const HeaderInfo = styled.p<DefaultStyleProps>`
	span {
		display: block;
	}

	display: flex;
	width: 200px;
	justify-content: space-between;
	font-size: 14px;
	font-weight: ${(props) => props.theme.fontWeights.medium};

	@media (${device.md}) {
		font-size: 16px;
	}
`;

export const HeaderExcerpt = styled.p<DefaultStyleProps>`
	display: none;

	@media (${device.sm}) {
		display: block;
		max-width: 500px;
	}

	@media (${device.xl}) {
		font-size: 20px;
		max-width: 800px;
	}
`;

export const GenresList = styled.ul<DefaultStyleProps>`
	list-style: none;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 250px;

	@media (${device.sm}) {
		width: 80%;
	}
`;

export const GenresItem = styled.li<DefaultStyleProps>`
	font-size: 14px;
	font-weight: ${(props) => props.theme.fontWeights.medium};
	margin-right: 12px;

	@media (${device.md}) {
		font-size: 16px;
	}
`;
