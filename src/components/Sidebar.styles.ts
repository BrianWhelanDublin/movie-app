import styled from "styled-components";
import { device } from "../assets/styles/breakpoints";
import { DefaultStyleProps } from "../types/types";

export const StyledSidebar = styled.div<DefaultStyleProps>`
	margin: 140px 0 20px 0;
	@media (${device.sm}) {
		position: fixed;
		top: 180px;
		left: 0;
		bottom: 0;
		margin: 0;
		padding: 0 40px;
	}
`;
