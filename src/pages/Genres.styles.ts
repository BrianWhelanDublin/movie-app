import styled from "styled-components";
import { device } from "../assets/styles/breakpoints";
import { DefaultStyleProps } from "../types/types";

export const GenresTitleContainer = styled.section<DefaultStyleProps>`
	padding: 18% 5% 8% 5%;

	position: fixed;
	top: 0;
	right: 0;
	left: 0;

	z-index: 2;
	background: ${(props) => props.theme.colors.black};
	@media (${device.sm}) {
		padding: 100px 0 80px 0;
		font-size: 32px;
	}
`;

export const GenresTitle = styled.h1<DefaultStyleProps>`
	letter-spacing: 4px;
	font-size: 20px;
	text-align: center;
	@media (${device.sm}) {
		font-size: 36px;
	}
`;

export const GenresSelect = styled.select<DefaultStyleProps>`
	background: ${(props) => props.theme.colors.black};
	color: ${(props) => props.theme.colors.white};
	font-size: 14px;
	border: none;

	margin-top: 24px;

	@media (${device.sm}) {
		display: none;
	}
`;

export const GenreItemsContainer = styled.div<DefaultStyleProps>`
	margin-top: 180px;
	@media (${device.sm}) {
		display: flex;
		flex-direction: row;
		gap: 20px;
	}
`;

export const GenrePageList = styled.ul<DefaultStyleProps>`
	display: none;
	@media (${device.sm}) {
		display: block;

		padding: 3% 2.5% 2.5% 5%;
		list-style: none;
		position: fixed;
		top: 180px;
		left: 0;
		bottom: 0;
	}
`;

export const GenreLink = styled.li<DefaultStyleProps>`
	font-size: 18px;
	margin: 8px 0;
	letter-spacing: 2px;
	cursor: pointer;
	color: ${(props) => props.theme.colors.grey1};
	transition: all 0.2s ease-in-out;

	&:hover {
		color: ${(props) => props.theme.colors.white};
		transform: scale(1.01);
	}
`;
