import styled, { DefaultTheme } from "styled-components";
import { device } from "../assets/styles/breakpoints";

interface StyledButtonProps {
	theme: DefaultTheme;
	href?: string;
	varient?: "filled" | "outline";
}

export const StyledButton = styled.button<StyledButtonProps>`
	border: 1px solid ${(props) => props.theme.colors.white};
	padding: 6px 10px;
	border-radius: 20px;
	transition: all 0.2s ease-in;
	font-size: 14px;
	background-color: ${(props) => (props.varient === "filled" ? props.theme.colors.white : "transparent")};
	color: ${(props) => (props.varient === "filled" ? props.theme.colors.black : props.theme.colors.white)};

	@media (${device.sm}) {
		padding: 10px 20px;
		font-size: 16px;
	}

	&:hover {
		background-color: ${(props) => (props.varient === "outline" ? props.theme.colors.white : "transparent")};
		color: ${(props) => (props.varient === "outline" ? props.theme.colors.black : props.theme.colors.white)};
	}
`;

export const StyledLinkButton = styled(StyledButton).attrs({ as: "a" })``;
