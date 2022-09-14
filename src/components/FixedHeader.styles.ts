import styled from "styled-components";
import { device } from "../assets/styles/breakpoints";
import { DefaultStyleProps } from "../types/types";

export const FixedHeaderContainer = styled.section<DefaultStyleProps>`
	padding: 18% 5% 8% 5%;

	position: fixed;
	top: 0;
	right: 0;
	left: 0;

	z-index: 2;
	background: ${(props) => props.theme.colors.black};
	@media (${device.sm}) {
		padding: 100px 0 40px 0;
		font-size: 32px;
	}
`;

export const StyledFixedHeaderTitle = styled.h1<DefaultStyleProps>`
	letter-spacing: 4px;
	font-size: 20px;
	text-align: center;
	@media (${device.sm}) {
		font-size: 36px;
	}
`;
