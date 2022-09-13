import styled from "styled-components";
import { device } from "../assets/styles/breakpoints";
import { DefaultStyleProps } from "../types/types";

export const GenresTitle = styled.h1<DefaultStyleProps>`
	margin-top: 80px;
	padding: 10% 5%;
	letter-spacing: 4px;
	font-size: 24px;
	text-align: center;

	@media (${device.sm}) {
		/* margin-top: 40px; */
		padding: 5% 5% 0 5%;
		font-size: 32px;
	}
`;
